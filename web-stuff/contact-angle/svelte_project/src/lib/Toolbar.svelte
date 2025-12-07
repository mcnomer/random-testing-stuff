<svelte:options runes={true} />

<script lang="ts">
    import { interactionModes, userState } from './state.svelte';
    import RadixIconsBorderDotted from '~icons/radix-icons/border-dotted';
    import IcRoundAddCircle from '~icons/ic/round-add-circle';
    import IcRoundRemoveCircle from '~icons/ic/round-remove-circle';
    import IcRoundUndo from '~icons/ic/round-undo';
    import IcRoundRedo from '~icons/ic/round-redo';


    const dropHistory = userState.dropHistory;

    function undoHandler() {
        userState.wafer.drops = dropHistory.undo();
        if (userState.historyUpdateCallback) userState.historyUpdateCallback();
    }
    function redoHandler() {
        userState.wafer.drops = dropHistory.redo();
        if (userState.historyUpdateCallback) userState.historyUpdateCallback();
    }
    document.addEventListener("keydown", e => {
        if (e.shiftKey) userState.keyPresses.shift = true;
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
    document.addEventListener("keyup", e => {
        if (!e.shiftKey) userState.keyPresses.shift = false;
    })
</script>

<div class="toolbar">
    <button title="Add Drop" class={(userState.interactionMode === interactionModes.PlaceDrop) ? "selected" : ""} onclick={() => userState.interactionMode = 0}>
        <IcRoundAddCircle></IcRoundAddCircle>
    </button>
    <button title="Add Line of Drops" class={(userState.interactionMode === interactionModes.PlaceLine) ? "selected" : ""} onclick={() => userState.interactionMode = 1}>
        <RadixIconsBorderDotted style="transform: rotate(90deg)"></RadixIconsBorderDotted>
    </button>
    {#if (userState.interactionMode === interactionModes.PlaceLine)}
        <span>
            <input type="number" name="NumLinePts" id="NumLinePtsInput" defaultValue={10} min="2" step="1" bind:value={userState.settings.numLinePts}>
            Pts
        </span>
    {/if}
    <button title="Remove Drop" class={(userState.interactionMode === interactionModes.DeleteDrop) ? "selected" : ""} onclick={() => userState.interactionMode = 2}>
        <IcRoundRemoveCircle></IcRoundRemoveCircle>
    </button>
    <button title="Undo" disabled={(dropHistory.index <= 0)} onclick={undoHandler}>
        <IcRoundUndo></IcRoundUndo>
    </button>
    <button title="Redo" disabled={(dropHistory.index >= dropHistory.queue.length - 1)} onclick={redoHandler}>
        <IcRoundRedo></IcRoundRedo>
    </button>
</div>