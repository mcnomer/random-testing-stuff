<svelte:options runes={true} />

<script lang="ts">
    import { userState } from './state.svelte';
</script>

<div class="toolbar">
    <button onclick={() => userState.interactionMode = 0}>⚪</button>
    <button onclick={() => userState.interactionMode = 1}>│</button>
    <button onclick={() => userState.interactionMode = 2}>🗑️</button>
    <button onclick={() => {
        console.log(userState.wafer);
        if (userState.wafer) {
            let value = userState.dropHistory.undo();
            console.log(value);
            userState.wafer.drops = value;
        }
    }}>🔙</button>
    <button onclick={() => userState.dropHistory.redo()}>🔜</button>
</div>