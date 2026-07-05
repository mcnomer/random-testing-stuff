<script lang="ts">
    import { fetchTree } from "./fetch_tree";
    import { getBreadcrumbsArray, getCurrentDir } from "./handle_urls";
    import Explorer from "./lib/Explorer.svelte";

    let dir: string = $state(getCurrentDir());
    let setDir = (newDir: string) => {
        dir = newDir;
    };

    let tree = $derived(fetchTree(dir));

    window.onpopstate = () => {
        dir = getCurrentDir();
    };
</script>

<header>
    <a class="header-logo-container" href="/">
        <img class="header-logo" src="/favicons/icon-144.png" alt="Logo" />
    </a>
    <h1 class="header-title">
        {#each getBreadcrumbsArray(dir) as breadcrumbPart}
            <span>{breadcrumbPart}</span>
        {/each}
    </h1>
</header>
<Explorer {tree} {dir} {setDir}></Explorer>
