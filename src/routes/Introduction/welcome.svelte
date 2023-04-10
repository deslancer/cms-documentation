<script>
    import {t} from "../../i18n/i18n.js";
    import Prism from "../../components/PrismJS.svelte";
    import Footer from "../../components/Footer.svelte";

    let code_sample = `
    [
  {
    "id": "mUMqJd4TTusvJu5JiZrVf",
    "name": "Main menu",
    "className": "",
    "style": [],
    "children": [
      {
        "id": "hFuwY0hIvF2yzQ3HJ78RU",
        "name": "Menu Item 1",
        "className": "",
        "style": [],
        "children": [],
        "events": "",
        "icon": "",
        "expanded": false,
        "metadata": "key:value"
      },
      {
        "id": "uBDEoXt6N4Ice6KliszXd",
        "name": "Menu Item 2",
        "className": "",
        "style": [],
        "children": [],
        "events": "",
        "icon": "",
        "expanded": false,
        "metadata": "key:value"
      }
    ]
  }
]
`;
</script>

<div class="container-sm overflow-y-auto">
    <h1>{$t("intro.header")}</h1>
    <p class="fs-6 mt-4">{$t("intro.p1")}</p>
    <p class="fs-6 my-2">{$t("intro.p2")}</p>
    <p class="fs-6 my-2">{$t("intro.p3")}</p>
    <p class="fs-6 my-2">{$t("intro.p4")}</p>
    <ul class="list-group list-group-flush">
        <li class="list-group-item bg-transparent text-white">
            <a class="text-decoration-none" href="/static">{$t("intro.li1").a}</a>
            <span>{$t("intro.li1").span}</span>
        </li>
        <li class="list-group-item bg-transparent text-white">
            <a class="text-decoration-none" href="/static">{$t("intro.li2").a}</a>
            <span>{$t("intro.li2").span}</span>
        </li>
        <li class="list-group-item bg-transparent text-white">
            <a class="text-decoration-none" href="/static">{$t("intro.li3").a}</a>
            <span>{$t("intro.li3").span}</span>
        </li>
        <li class="list-group-item bg-transparent text-white">
            <a class="text-decoration-none" href="/static">{$t("intro.li4").a}</a>
            <span>{$t("intro.li4").span}</span>
        </li>
        <li class="list-group-item bg-transparent text-white">
            <a class="text-decoration-none" href="/static">{$t("intro.li5").a}</a>
            <span>{$t("intro.li5").span}</span>
        </li>
    </ul>
    <h4 class="mt-4">{$t("intro.header2")}</h4>
    <p class="fs-6 mt-4">{$t("intro.p5")}</p>
    <p class="fs-6 mt-4">{$t("intro.p6")}</p>
    <p class="fs-6 mt-4">{$t("intro.p7")}</p>
    <p class="fs-6 mt-4">{$t("intro.p8")}</p>
    <ul class="list-group list-group-flush">
        <li class="list-group-item bg-transparent text-white">
            <span>{$t("intro.li6")}</span>
        </li>
        <li class="list-group-item bg-transparent text-white">
            <span>{$t("intro.li7")}</span>
        </li>
        <li class="list-group-item bg-transparent text-white">
            <span>{$t("intro.li8")}</span>
        </li>
    </ul>
    <p class="fs-6 mt-4">{$t("intro.p9")}</p>
    <Prism language="json" code="{code_sample}" header=""/>
    <Footer
            last_updated="06.04.2023"
            next_page_link="/Introduction/getting-started"
            next_page_name={$t("menu.getting-started")}>
    </Footer>
</div>
