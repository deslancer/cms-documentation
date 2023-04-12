<script>
    import SidebarItem from "./SidebarItem.svelte";
    import {t} from "../i18n/i18n.js";

    $:data = {
        [$t("menu.introduction")]: [
            {
                id: 0,
                name: [$t("menu.welcome")],
                link: "/Introduction/welcome"
            },
            {
                id: 1,
                name: [$t("menu.getting-started")],
                link: "/Introduction/getting-started"
            },
            {
                id: 2,
                name: [$t("menu.glossary")],
                link: "/Introduction/glossary"
            },

        ],
        'Litegraph': [
            {
                id: 3,
                name: "Essentials",
                link: "/Litegraph/essentials"
            },
            {
                id: 4,
                name: "CMS Nodes",
                link: "/Litegraph/cms-nodes"
            },
            {
                id: 5,
                name: "Core Nodes",
                link: "/Litegraph/core-nodes"
            },
            ],
        [$t("menu.videos")]: [
            {
                id: 12,
                name: [$t("v.tut1")],
                link: "/Videos/tutorial1"
            },
            {
                id: 13,
                name: [$t("v.tut2")],
                link: "/Videos/tutorial2"
            },
        ],
        [$t("menu.guides")]: [
            {
                id: 14,
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
                id: 14,
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