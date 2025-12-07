<svelte:options runes={true} />
<script lang="ts">
  import { Stage, Layer, Rect, Circle, Arc, Group, Text, type KonvaMouseEvent } from 'svelte-konva';
  import { userState, interactionModes, Drop, checkStatuses } from './state.svelte';
  import { lerpVec2, rotateVec2 } from './vector.svelte';
  import { check } from './feasibility.svelte';
  import RangeSlider from 'svelte-range-slider-pips'

  let { canvasSize, rem } = $props();
  let centreX = $derived(canvasSize / 2);
  let centreY = $derived(canvasSize / 2);
  let waferCanvasDiameter = $derived(canvasSize - 6*rem);
  let waferCanvasRadius = $derived(waferCanvasDiameter / 2);
  const wafer = userState.wafer;
  
  function placeDrop(pos=[0, 0]) {
    if (Math.hypot(pos[0], pos[1]) > wafer.radius) return;
    wafer.drops.push(new Drop(pos));
  }

  function genLinePts(pos=[0, 0], angle=0): number[][] {
    if (userState.settings.numLinePts < 2) return []; // not enough points to work
    let theta = angle * Math.PI/180; // deg2rad
    theta += Math.PI / 2; // offset 90 degrees so line is vertical
    pos = [rotateVec2(pos, -angle)[0], 0]; // project to x-axis so it's in the centre of the wafer
    let lineMaxLength = wafer.radius - userState.settings.WaferUnusedEdgeThickness;
    if (wafer.radius - Math.abs(pos[0]) < userState.settings.WaferUnusedEdgeThickness) return []; // too close to edge
    let distanceToWaferEdge = Math.sqrt(lineMaxLength**2 - pos[0]**2);
    let offset = [distanceToWaferEdge * Math.cos(theta), distanceToWaferEdge * Math.sin(theta)];
    pos = rotateVec2(pos, angle); // rotate back to how it was

    let from = [pos[0] - offset[0], pos[1] - offset[1]];
    let to = [pos[0] + offset[0], pos[1] + offset[1]];

    let linePts = [];
    for (let i = 0; i < userState.settings.numLinePts; i++) {
      let a = i / (userState.settings.numLinePts - 1); // fence post problem - 10 dots, 9 spaces
      linePts.push(lerpVec2(from, to, a));
    }
    return linePts;
  }

  function placeLine(pos=[0, 0], angle=0) {
    const linePts = genLinePts(pos, angle);
    for (let point of linePts) {
      placeDrop(point);
    }
  }

  function deleteDrop(pos=[0, 0]): boolean {
    const distances = wafer.drops.map(d => Math.hypot(d.pos[0] - pos[0], d.pos[1] - pos[1]));
    const indices = Array.from(distances.keys());
    indices.sort((a, b) => distances[a] - distances[b]);
    if (distances[indices[0]] < userState.settings.DropDeleteDistanceThreshold) {
      wafer.drops.splice(indices[0], 1) // remove drop closest to clicked pos
      return true;
    }
    return false; // no drop removed
  }

  function getMouseEventPos(e: KonvaMouseEvent) {
    const group = e.target.getStage()?.findOne('Group');
    if (!group) return;

    const pos = group.getRelativePointerPosition();
    if (!pos) return;
    const offsetPos = [pos.x - wafer.pos[0] * wafer.scale, pos.y - wafer.pos[1] * wafer.scale];
    const rotatedPos = rotateVec2(offsetPos, -wafer.rot);
    let scaledPos = [rotatedPos[0]/wafer.scale, rotatedPos[1]/wafer.scale];

    if (!userState.keyPresses.shift) return scaledPos;
    return [Math.round(scaledPos[0] / 5) * 5, Math.round(scaledPos[1] / 5) * 5];
  }

  function handleClick(e: KonvaMouseEvent) {
    const pos = getMouseEventPos(e);
    switch (userState.interactionMode) {
      case interactionModes.PlaceDrop: {
        placeDrop(pos);
        userState.dropHistory.add(wafer.drops);
        if (userState.historyUpdateCallback) userState.historyUpdateCallback();
        break;
      };
      case interactionModes.PlaceLine: {
        placeLine(pos, -wafer.rot);
        userState.dropHistory.add(wafer.drops);
        if (userState.historyUpdateCallback) userState.historyUpdateCallback();
        break;
      };
      case interactionModes.DeleteDrop: {
        if (deleteDrop(pos)) {
          userState.dropHistory.add(wafer.drops);
          if (userState.historyUpdateCallback) userState.historyUpdateCallback();
        }
        break;
      };
      default:
        break;
    }
  }

  function checkFeasibility() {
    userState.checkStatus = checkStatuses.NotChecked;
    let points = wafer.drops.map(d => [d.pos[0], d.pos[1]]);
    
    if (points.length > 400) {
      userState.checkStatus = checkStatuses.NotChecked;
      for (let d of wafer.drops) {
        d.feasibilityPassed = checkStatuses.NotChecked;
      }
      return;
    }

    let passed = check(points, userState.settings.centreTolerance, userState.settings.cameraViewWidth);
    for (let i = 0; i < points.length; i++) {
      wafer.drops[i].feasibilityPassed = (passed[i]) ? checkStatuses.Passed : checkStatuses.Failed;
    }
    let passedAll = passed.every(e => e);
    userState.checkStatus = (passedAll) ? checkStatuses.Passed : checkStatuses.Failed;
  }
  userState.historyUpdateCallback = checkFeasibility;

  let mouseOverWafer = $state(false);
  let mouseHoverPos = $state([0, 0]);
  let rotatedMouseMoverPos = $derived(rotateVec2(mouseHoverPos, -wafer.rot));
  function handleMouseMove(e: KonvaMouseEvent) {
    let pos = getMouseEventPos(e);
    if (pos) mouseHoverPos = pos;
    mouseOverWafer = true;
  }
  function handleMouseLeave(e: KonvaMouseEvent) {
    let pos = getMouseEventPos(e);
    if (pos) mouseHoverPos = pos;
    mouseOverWafer = false;
  }

  let mouseOverRotButtons = $state(false);
  function mod(n: number, m: number) {
    return ((n % m) + m) % m;
  }
</script>

<article class="wafer-display">
  <div class="canvas-container">
    <Stage width={canvasSize} height={canvasSize} >
      <Layer>
        <Rect x={0} y={0} width={canvasSize} height={canvasSize} fill={userState.colors.background}></Rect>
        <Group x={centreX} y={centreY} onclick={handleClick}>
          <Group name="Wafer" x={wafer.pos[0] * wafer.scale} y={wafer.pos[1] * wafer.scale} rotation={wafer.rot} onmousemove={handleMouseMove} onmouseleave={handleMouseLeave}>
            <Circle radius={waferCanvasRadius} stroke={userState.colors.stroke} fill={userState.colors.background} strokeWidth={5}></Circle>
            <Arc x={0} y={waferCanvasRadius} angle={180-10} innerRadius={0} outerRadius={10} rotation={180+5} fill={userState.colors.background} stroke={userState.colors.stroke} strokeWidth={5}></Arc>
            {#each wafer.drops as drop}
              <Circle x={drop.pos[0] * wafer.scale} y={drop.pos[1] * wafer.scale} radius={2} fill={(drop.feasibilityPassed === checkStatuses.Failed) ? "#f00" : (
                (drop.feasibilityPassed === checkStatuses.Passed) ? "#7cf" : userState.colors.stroke
              )}></Circle>
            {/each}
            {#if (mouseOverWafer)}
              {#if (userState.interactionMode === interactionModes.PlaceDrop)}
                <Circle x={mouseHoverPos[0] * wafer.scale} y={mouseHoverPos[1] * wafer.scale} radius={2} fill={"#7cf8"}></Circle>
              {:else if (userState.interactionMode === interactionModes.PlaceLine)}
                {#each genLinePts(mouseHoverPos, -wafer.rot) as point}
                  <Circle x={point[0] * wafer.scale} y={point[1] * wafer.scale} radius={2} fill={"#7cf8"}></Circle>
                {/each}
              {/if}
            {/if}
          </Group>
        </Group>
        <Text x={0} y={canvasSize-rem} text={
          (mouseOverWafer ) ? (
            (userState.interactionMode === interactionModes.PlaceDrop) ? `(${rotatedMouseMoverPos[0].toFixed(2)}, ${rotatedMouseMoverPos[1].toFixed(2)})` : (
              (userState.interactionMode === interactionModes.PlaceLine) ? `${rotatedMouseMoverPos[0].toFixed(2)}` : ""
            )
          ) : (mouseOverRotButtons) ? `${mod(-wafer.rot, 360)}°` : ""
          } fontSize={rem} align="right" verticalAlign="bottom" offsetX={rem} offsetY={rem} width={canvasSize} height={rem} fill={userState.colors.text}>
        </Text>
      </Layer>
    </Stage>
    <RangeSlider class="slider vertical-slider" bind:value={wafer.pos[1]} min={-wafer.radius} max={wafer.radius} reversed float vertical style={`height: ${waferCanvasDiameter}px`} step={(userState.keyPresses.shift) ? 5 : 1}  pips={userState.keyPresses.shift} pipstep={2}></RangeSlider>
  </div>
  <RangeSlider class="slider horizontal-slider" bind:value={wafer.pos[0]} min={-wafer.radius} max={wafer.radius} float style={`width: ${waferCanvasDiameter}px`} step={(userState.keyPresses.shift) ? 5 : 1} pips={userState.keyPresses.shift} pipstep={2}></RangeSlider>
</article>


<!-- <div class="toolbar movement-toolbar">
  <button onclick={() => wafer.pos[1] -= rem}>⬆️</button>
  <button onclick={() => wafer.pos[1] += rem}>⬇️</button>
  <button onclick={() => wafer.pos[0] -= rem}>⬅️</button>
  <button onclick={() => wafer.pos[0] += rem}>➡️</button>
</div> -->
<div class="toolbar rotation-toolbar">
  <button onclick={() => wafer.rot += 15} onmouseenter={() => mouseOverRotButtons = true} onmouseleave={() => mouseOverRotButtons = false}>↩️</button>
  <button onclick={() => wafer.rot -= 15} onmouseenter={() => mouseOverRotButtons = true} onmouseleave={() => mouseOverRotButtons = false}>↪️</button>
  
  <button class="shift-left" onclick={() => {
    wafer.drops = [];
    userState.dropHistory.add(wafer.drops);
    if (userState.historyUpdateCallback) userState.historyUpdateCallback();
  }}>Clear</button>
  <button class="shift-right" onclick={() => {
    wafer.pos = [0, 0];
    wafer.rot = 0;
  }}>📍</button>
</div>
<div class="toolbar">
  <!-- <button onclick={checkFeasibility}>Check</button> -->
  <h3>Result: {(userState.checkStatus === checkStatuses.NotChecked) ? "❔" : ((userState.checkStatus === checkStatuses.Passed) ? "✔️" : "❌")}</h3>
</div>