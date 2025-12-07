<svelte:options runes={true} />
<script lang="ts">
  import { Stage, Layer, Rect, Circle, Arc, Group, type KonvaMouseEvent } from 'svelte-konva';
  import { userState, interactionModes, Drop } from './state.svelte';
  import { lerpVec2, rotateVec2 } from './vector.svelte';

  const DropDeleteDistanceThreshold = 5;
  const NumPointsInLine = 10;
  const WaferUnusedEdgeThickness = 10;

  let { canvasSize, rem } = $props();
  let centreX = $derived(canvasSize / 2);
  let centreY = $derived(canvasSize / 2);
  let waferCanvasDiameter = $derived(canvasSize - 6*rem);
  let waferCanvasRadius = $derived(waferCanvasDiameter / 2);

  window.DropHistory = userState.dropHistory;

  class Wafer {
    pos = $state([0, 0]);
    rot = $state(0);
    readonly diameter = 200;
    readonly radius = this.diameter / 2;
    readonly scale = $derived(waferCanvasRadius / this.radius);
    readonly notchPos = $derived([0, this.radius * this.scale]);
    drops:Drop[] = $state([]);
  }
  
  const wafer = $state(new Wafer());

  function placeDrop(pos=[0, 0]) {
    if (Math.hypot(pos[0], pos[1]) > wafer.radius) return;
    wafer.drops.push(new Drop(pos));
    userState.dropHistory.add(wafer.drops);
  }

  function placeLine(pos=[0, 0], angle=0) {
    let theta = angle * Math.PI/180; // deg2rad
    theta += Math.PI / 2; // offset 90 degrees so line is vertical
    pos = [rotateVec2(pos, -angle)[0], 0]; // project to x-axis so it's in the centre of the wafer
    let lineMaxLength = wafer.radius - WaferUnusedEdgeThickness;
    if (wafer.radius - Math.abs(pos[0]) < WaferUnusedEdgeThickness) return; // too close to edge
    let distanceToWaferEdge = Math.sqrt(lineMaxLength**2 - pos[0]**2);
    let offset = [distanceToWaferEdge * Math.cos(theta), distanceToWaferEdge * Math.sin(theta)];
    pos = rotateVec2(pos, angle); // rotate back to how it was

    let from = [pos[0] - offset[0], pos[1] - offset[1]];
    let to = [pos[0] + offset[0], pos[1] + offset[1]];
    for (let i = 0; i < NumPointsInLine; i++) {
      let a = i / (NumPointsInLine - 1); // fence post problem - 10 dots, 9 spaces
      placeDrop(lerpVec2(from, to, a));
    }
    userState.dropHistory.add(wafer.drops);
  }

  function deleteDrop(pos=[0, 0]) {
    const distances = wafer.drops.map(d => Math.hypot(d.pos[0] - pos[0], d.pos[1] - pos[1]));
    const indices = Array.from(distances.keys());
    indices.sort((a, b) => distances[a] - distances[b]);
    if (distances[indices[0]] < DropDeleteDistanceThreshold) {
      wafer.drops.splice(indices[0], 1) // remove drop closest to clicked pos
    }
    userState.dropHistory.add(wafer.drops);
  }

  function handleClick(e: KonvaMouseEvent) {
    const group = e.target.getStage()?.findOne('Group');
    if (!group) return;

    const pos = group.getRelativePointerPosition();
    if (!pos) return;
    const offsetPos = [pos.x - wafer.pos[0], pos.y - wafer.pos[1]];
    const rotatedPos = rotateVec2(offsetPos, -wafer.rot);
    const scaledPos = [rotatedPos[0]/wafer.scale, rotatedPos[1]/wafer.scale];
    switch (userState.interactionMode) {
      case interactionModes.PlaceDrop: {
        placeDrop(scaledPos);
        break;
      };
      case interactionModes.PlaceLine: {
        placeLine(scaledPos, -wafer.rot);
        break;
      };
      case interactionModes.DeleteDrop: {
        deleteDrop(scaledPos);
        break;
      };
      default:
        break;
    }
  }
  window.wafer = wafer;
</script>

<Stage width={canvasSize} height={canvasSize} >
  <Layer>
    <Rect x={0} y={0} width={canvasSize} height={canvasSize} fill="#000"></Rect>
    <Group x={centreX} y={centreY} onclick={handleClick}>
      <Group name="Wafer" x={wafer.pos[0]} y={wafer.pos[1]} rotation={wafer.rot}>
        <Circle radius={waferCanvasRadius} stroke="#333" strokeWidth={5}></Circle>
        <Arc x={wafer.notchPos[0]} y={wafer.notchPos[1]} angle={180-10} innerRadius={0} outerRadius={10} rotation={180+5} fill="#000" stroke="#333" strokeWidth={5}></Arc>
        {#each wafer.drops as drop}
          <Circle x={drop.pos[0] * wafer.scale} y={drop.pos[1] * wafer.scale} radius={2} fill="#7cf"></Circle>
        {/each}
      </Group>
    </Group>
  </Layer>
</Stage>

<div class="toolbar movement-toolbar">
  <button onclick={() => wafer.pos[1] -= rem}>⬆️</button>
  <button onclick={() => wafer.pos[1] += rem}>⬇️</button>
  <button onclick={() => wafer.pos[0] -= rem}>⬅️</button>
  <button onclick={() => wafer.pos[0] += rem}>➡️</button>
</div>
<div class="toolbar rotation-toolbar">
  <button onclick={() => wafer.rot += 15}>↩️</button>
  <button onclick={() => wafer.rot -= 15}>↪️</button>
</div>