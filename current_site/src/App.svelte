<script lang="ts">
    import { innerWidth } from "svelte/reactivity/window";

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

    let headerWidth = $state(0);
    let headerTitle: Element | null = $state(null);
    $effect(() => {
        // get element once page loaded
        headerTitle = document.querySelector(".header-title");
    });

    $effect(() => {
        // every time dir updates -> update recorded width
        dir;
        headerWidth = headerTitle?.getBoundingClientRect().width || 0;
    });

    const rem = $derived(
        parseFloat(getComputedStyle(document.documentElement).fontSize),
    );
    $effect(() => {
        if (!headerTitle || !innerWidth.current) return;
        if (headerWidth > innerWidth.current - 10 * rem) {
            headerTitle.className = "header-title breakpoint";
        } else {
            headerTitle.className = "header-title";
        }
    });
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
