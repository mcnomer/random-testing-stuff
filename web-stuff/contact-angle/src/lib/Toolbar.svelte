<svelte:options runes={true} />

<script lang="ts">
    import { interactionModes, userState } from './state.svelte';
    const dropHistory = userState.dropHistory;

    function undoHandler() {
        userState.wafer.drops = dropHistory.undo();
        if (userState.historyUpdateCallback) userState.historyUpdateCallback();
    }
    function redoHandler() {
        userState.wafer.drops = dropHistory.redo();
        if (userState.historyUpdateCallback) userState.historyUpdateCallback();
    }
    window?.addEventListener("keydown", e => {
        if (e.key === "Tab" || e.key === "Enter") {
            if (!userState.settings.numLinePts) userState.settings.numLinePts = 10;
            userState.settings.numLinePts = Math.round(userState.settings.numLinePts);
            userState.settings.numLinePts = Math.max(userState.settings.numLinePts, 2);
        }

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
    <button class={(userState.interactionMode === interactionModes.PlaceDrop) ? "selected" : ""} onclick={() => userState.interactionMode = 0}>⚪</button>
    <button class={(userState.interactionMode === interactionModes.PlaceLine) ? "selected" : ""} onclick={() => userState.interactionMode = 1}>│</button>
    {#if (userState.interactionMode === interactionModes.PlaceLine)}
        <span>
            <input type="number" name="NumLinePts" id="NumLinePtsInput" defaultValue={10} min="2" step="1" bind:value={userState.settings.numLinePts}>
            Pts
        </span>
    {/if}
    <button class={(userState.interactionMode === interactionModes.DeleteDrop) ? "selected" : ""} onclick={() => userState.interactionMode = 2}>🗑️</button>
    <button disabled={(dropHistory.index <= 0)} onclick={undoHandler}>🔙</button>
    <button disabled={(dropHistory.index >= dropHistory.queue.length - 1)} onclick={redoHandler}>🔜</button>
</div>