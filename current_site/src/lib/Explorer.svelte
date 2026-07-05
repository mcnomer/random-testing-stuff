<script lang="ts">
    import type { components } from "@octokit/openapi-types";
    import Folder from "./Folder.svelte";
    import File from "./File.svelte";
    import { getDirName, getParentDir } from "../handle_urls";
    type ContentDirectory = components["schemas"]["content-directory"];

    let {
        tree: treePromise,
        dir,
        setDir,
    }: {
        tree: Promise<ContentDirectory>;
        dir: string;
        setDir: Function;
    } = $props();

    let parentDir = $derived(getParentDir(dir));
    let parentDirName = $derived(getDirName(parentDir));

    function handleBackButton() {
        if (window.history.state === parentDir) {
            window.history.back();
        } else {
            window.history.pushState(
                parentDir,
                "Testing - " + parentDirName,
                `?dir=${encodeURIComponent(parentDir)}`,
            );
            setDir(parentDir);
        }
    }
</script>

<main class="explorer">
    {#await treePromise}
        <p>Loading file explorer from GitHub...</p>
    {:then tree}
        {#if dir !== "web-stuff"}
            <button class="item" onclick={handleBackButton}>
                <img class="item-icon" src="/icons/back.svg" alt="back" />
            </button>
        {/if}
        {#each tree as treeItem}
            {#if treeItem.type === "dir"}
                <Folder key={treeItem.sha} folder={treeItem} {setDir}></Folder>
            {:else if treeItem.type === "file"}
                <File key={treeItem.sha} file={treeItem}></File>
            {/if}
        {/each}
    {:catch err}
        <p>Error loading file explorer: {err}</p>
    {/await}
</main>
