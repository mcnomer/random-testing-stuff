<script lang="ts">
    import { userState } from "./state.svelte";

    let { showModal = $bindable() } = $props();

    let dialog: HTMLDialogElement|undefined = $state();

    $effect(() => {
        if (showModal) dialog?.showModal();
    })

    $effect(() => {
        localStorage?.setItem('userSettings', JSON.stringify(userState.settings))
    })
</script>

<dialog class="settings" bind:this={dialog} onclose={() => showModal = false} onclick={e => {if (e.target === dialog) dialog.close();}}>
    <h2>Settings</h2>
    <hr />
    <ul>
        <li>
            <span class="label">Wafer Diameter</span>
            <span class="input-range">
                <input type="number" min={2} name="WaferDiameter" id="WaferDiameter" bind:value={userState.settings.waferDiameter}>
                <p class="units">mm</p>
            </span>
        </li>
        <li>
            <span class="label">Wafer Unused Edge Size</span>
            <span class="input-range">
                <input type="number" min={0} max={100} name="WaferUnusedEdgeSize" id="WaferUnusedEdgeSize" bind:value={userState.settings.WaferUnusedEdgeThickness}>
                <p class="units">mm</p>
            </span>
        </li>
        <li>
            <span class="label">Stage X Range</span>
            <span class="input-range">
                <input type="number" max={0} name="StageXRangeMin" id="StageXRangeMin" bind:value={userState.settings.stage.xRange.min}>
                -
                <input type="number" min={0} name="StageXRangeMax" id="StageXRangeMax" bind:value={userState.settings.stage.xRange.max}>
                <p class="units">mm</p>
            </span>
        </li>
        <li>
            <span class="label">Stage Y Range</span>
            <span class="input-range">
                <input type="number" max={0} name="StageYRangeMin" id="StageYRangeMin" bind:value={userState.settings.stage.yRange.min}>
                -
                <input type="number" min={0} name="StageYRangeMax" id="StageYRangeMax" bind:value={userState.settings.stage.yRange.max}>
                <p class="units">mm</p>
            </span>
        </li>
        <li>
            <span class="label">Camera Centre Tolerance</span>
            <span class="input-range">
                <input type="number" min={0} name="CameraCentreTolerance" id="CameraCentreTolerance" bind:value={userState.settings.centreTolerance}>
                <p class="units">mm</p>
            </span>
        </li>
        <li>
            <span class="label">Camera View Width</span>
            <span class="input-range">
                <input type="number" min={0} name="CameraViewWidth" id="CameraViewWidth" bind:value={userState.settings.cameraViewWidth}>
                <p class="units">mm</p>
            </span>
        </li>
    </ul>
    <hr />
    <button autofocus onclick={() => dialog?.close()}>Close</button>
</dialog>