<script lang="ts">
    import type { components } from "@octokit/openapi-types";

    type ContentDirectory = components["schemas"]["content-directory"];
    type ContentDirectoryItem = ContentDirectory[number];

    let {
        key,
        folder,
        setDir,
    }: { key: string; folder: ContentDirectoryItem; setDir: Function } =
        $props();

    const folderName = $derived(folder.path.split("/").pop());
</script>

<button
    class="item"
    onclick={() => {
        window.history.pushState(
            folder.path,
            "Testing - " + folderName,
            `?dir=${encodeURIComponent(folder.path)}`,
        );
        setDir(folder.path);
    }}
>
    <img class="item-icon" src="/icons/folder.svg" alt="folder" />
    <span class="item-name">{folderName}</span>
</button>
