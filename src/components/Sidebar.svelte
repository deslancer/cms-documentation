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
        'Litegraph': [
            {
                name: "Essentials",
                link: "/Litegraph/essentials"
            },
            {
                name: "CMS Nodes",
                link: "/Litegraph/cms-nodes"
            },
            {
                name: "Core Nodes",
                link: "/Litegraph/core-nodes"
            },
            ],
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
        "FAQ": [
            {
                name: "Faq",
                link: "/"
            }
        ]
    }
</script>

<nav class="p-2">
    {#each Object.entries(data) as entry}
        <SidebarItem {entry}/>
    {/each}
</nav>