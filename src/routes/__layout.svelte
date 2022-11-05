<script lang="ts">
    import Header from "../components/Header.svelte";
    import SidebarItem from "../components/SidebarItem.svelte";
    import { t, locale, locales } from "../i18n/i18n";
    $:data = {
        [$t("menu.introduction")]: [
            {
                name: "Welcome to docs",
                link: "/welcome"
            },
            {
                name: "Getting Started",
                link: "/getting-started"
            },
            {
                name: "Quick Setup",
                link: "/quick-setup"
            },
        ],
        [$t("menu.guides")]: [4, 5, 6, 7, 8, 9, 10, 11],
        'Litegraph': [12, 24, 42],
        [$t("menu.engines")]: [
            {
                name: "BABYLON",
                link: "/babylonjs"
            },
            {
                name: "THREE",
                link: "/threejs"
            },
            {
                name: "VERGE",
                link: "/verge3d"
            },
        ],
        'UIDL': [11, 12, 23]
    }

</script>
<svelte:head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
</svelte:head>
<main class="main-container">
    <div class="row">
        <div class="col">
            <Header/>
        </div>
    </div>
    <div class="row content-container">
        <div class="col-2 border-right-grey ">
            <nav class="p-2">
                {#each Object.entries(data) as entry}
                    <SidebarItem {entry}/>
                {/each}
            </nav>
        </div>
        <div class="col-10">
            <div class="container p-2">
                <slot />
            </div>
        </div>
    </div>
</main>
<style>
    .main-container {
        background-color: #333438;
        color: white;
        height: 100vh;
        overflow: hidden;
    }

    .border-right-grey {
        border-right: 1px solid #6B6C70;
    }

    .content-container {
        height: calc(100% - 60px);
    }
</style>

