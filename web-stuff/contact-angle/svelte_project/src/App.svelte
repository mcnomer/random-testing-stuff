<svelte:options runes={true} />
<script lang="ts">
  import WaferDisplay from './lib/WaferDisplay.svelte';
  import Toolbar from './lib/Toolbar.svelte';
  import { rem, userState, getCanvasSize } from './lib/state.svelte';
    import { rotateVec2 } from './lib/vector.svelte';
  
  const canvasSize = $derived.by(getCanvasSize);

  function copyCoords() {
    let points = userState.wafer.drops.map(d => [d.pos[0], d.pos[1]]);
    points = points.map(p => rotateVec2(p, userState.wafer.rot));
    let coordStrings = points.map(p => `${p[0].toFixed(3)};${p[1].toFixed(3)};0.000`);
    let s = coordStrings.join("\n");
    navigator.clipboard.writeText(s);
  }
</script>

<main>
  <h1>Feasibility Checker</h1>
  <Toolbar></Toolbar>
  <WaferDisplay canvasSize={canvasSize} rem={rem}></WaferDisplay>
  <button class="copy-coords" onclick={copyCoords}>Copy Coords</button>
</main>

<style>

</style>
