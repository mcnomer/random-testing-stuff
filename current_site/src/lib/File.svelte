<script lang="ts">
    import type { components } from "@octokit/openapi-types";
    import { fileSizeToString } from "../fetch_tree";

    type ContentDirectory = components["schemas"]["content-directory"];
    type ContentDirectoryItem = ContentDirectory[number];

    let { key, file }: { key: string; file: ContentDirectoryItem } = $props();
</script>

<a href={"/" + file.path} class="item">
    <img class="item-icon" src="/icons/file.svg" alt="file" />
    <span class="item-name">{file.path.split("/").pop()}</span>
    <span class="item-size">{fileSizeToString(file.size)}</span>
</a>
