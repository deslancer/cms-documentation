<script>
    import SidebarItem from "./SidebarItem.svelte";
    import {t} from "../i18n/i18n.js";

    $:data = {
        [$t("menu.introduction")]: [
            {
                name: [$t("menu.welcome")],
                link: "/Introduction/welcome"
            },
            {
                name: [$t("menu.getting-started")],
                link: "/Introduction/getting-started"
            },
            {
                name: [$t("menu.glossary")],
                link: "/Introduction/glossary"
            },

        ],
        [$t("menu.guides")]: [
            {
                name: "_",
                link: "/"
            },
            {
                name: "_",
                link: "/"
            },
            {
                name: "_",
                link: "/"
            },
            {
                name: "_",
                link: "/"
            },
            {
                name: "_",
                link: "/"
            },
        ],
        'Litegraph': [
            {
                name: "_",
                link: "/"
            },
            {
                name: "_",
                link: "/"
            },
            {
                name: "_",
                link: "/"
            }],
        [$t("menu.engines")]: [
            {
                name: "BABYLON",
                link: "/Engines/babylonjs"
            },
            {
                name: "THREE",
                link: "/Engines/threejs"
            },
            {
                name: "VERGE",
                link: "/Engines/verge3d"
            },
        ],
        'UIDL': [
            {
                name: "_",
                link: "/"
            },
            {
                name: "_",
                link: "/"
            },
            {
                name: "_",
                link: "/"
            }
        ],
        [$t("menu.videos")]: [
            {
                name: [$t("v.tut1")],
                link: "/Videos/tutorial1"
            },
        ]
    }
</script>

<nav class="p-2">
    {#each Object.entries(data) as entry}
        <SidebarItem {entry}/>
    {/each}
</nav>