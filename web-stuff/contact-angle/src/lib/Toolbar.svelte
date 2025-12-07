<svelte:options runes={true} />

<script lang="ts">
    import { userState } from './state.svelte';
    const dropHistory = userState.dropHistory;

    function undoHandler() {
        userState.wafer.drops = dropHistory.undo();
        if (userState.dropChangeCallback) userState.dropChangeCallback();
    }
    function redoHandler() {
        userState.wafer.drops = dropHistory.redo();
        if (userState.dropChangeCallback) userState.dropChangeCallback();
    }
    window?.addEventListener("keydown", e => {
        if (!(e.key.toLowerCase() === "z" && (e.ctrlKey || e.metaKey))) return;
        e.preventDefault();
        if (e.shiftKey) {
            redoHandler();
        } else {
            undoHandler();
        }
    });
</script>

<div class="toolbar">
    <button onclick={() => userState.interactionMode = 0}>⚪</button>
    <button onclick={() => userState.interactionMode = 1}>│</button>
    <button onclick={() => userState.interactionMode = 2}>🗑️</button>
    <button disabled={(dropHistory.index <= 0)} onclick={undoHandler}>🔙</button>
    <button disabled={(dropHistory.index >= dropHistory.queue.length - 1)} onclick={redoHandler}>🔜</button>
</div>