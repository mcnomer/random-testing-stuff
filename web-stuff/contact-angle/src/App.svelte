<svelte:options runes={true} />
<script lang="ts">
  import { innerWidth, innerHeight } from 'svelte/reactivity/window';
  import WaferDisplay from './lib/WaferDisplay.svelte';
  import Toolbar from './lib/Toolbar.svelte';
  import { rem, userState } from './lib/state.svelte';
  
  const canvasSize = $derived.by(() => {
    const width = innerWidth.current ?? 0;
    const height = innerHeight.current ?? 0;
    const minScreenSize = Math.min(width, height);
    return Math.max(Math.min(minScreenSize - 6*rem, Math.max(width, height)*.4), 0);
  });

  function copyCoords() {
    let points = userState.wafer.drops.map(d => [d.pos[0], d.pos[1]]);
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
