<svelte:options runes={true} />
<script lang="ts">
  import { innerWidth, innerHeight } from 'svelte/reactivity/window';
  import WaferDisplay from './lib/WaferDisplay.svelte';
  import Toolbar from './lib/Toolbar.svelte';
  import { rem } from './lib/state.svelte';
  
  // const canvasSize = $derived.by(() => {
  //   const width = innerWidth.current ?? 0;
  //   const height = innerHeight.current ?? 0;
  //   const minScreenSize = Math.min(width, height);
  //   return minScreenSize * 0.5 - 2*rem;
  // });
</script>

<main>
  <h1>Feasibility Checker</h1>
  <Toolbar></Toolbar>
  <WaferDisplay canvasSize={500} rem={rem}></WaferDisplay>
</main>

<style>

</style>
