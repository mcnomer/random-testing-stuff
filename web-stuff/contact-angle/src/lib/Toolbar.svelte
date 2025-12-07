<svelte:options runes={true} />

<script lang="ts">
    import { userState } from './state.svelte';
    const dropHistory = userState.dropHistory;
</script>

<div class="toolbar">
    <button onclick={() => userState.interactionMode = 0}>⚪</button>
    <button onclick={() => userState.interactionMode = 1}>│</button>
    <button onclick={() => userState.interactionMode = 2}>🗑️</button>
    <button disabled={(dropHistory.index <= 0)} onclick={() => userState.wafer.drops = dropHistory.undo()}>🔙</button>
    <button disabled={(dropHistory.index >= dropHistory.queue.length - 1)} onclick={() => userState.wafer.drops = dropHistory.redo()}>🔜</button>
</div>