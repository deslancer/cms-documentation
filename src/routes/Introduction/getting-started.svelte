<script>
    import {t} from "../../i18n/i18n.js";
    import Footer from "../../components/Footer.svelte";
</script>

<div class="container-sm overflow-y-auto">
    <h1>{$t("gs.header")}</h1>
    <p class="fs-6 mt-4">{$t("gs.p1")}</p>
    <img src="/assets/imgs/register.png" alt="register">
    <p class="fs-6 mt-4">{$t("gs.p2")}</p>
    <img src="/assets/imgs/create_proj.png" alt="create project">
    <p class="fs-6 mt-4">{$t("gs.p3")}</p>
    <p class="fs-6 mt-4">{$t("gs.p4")}</p>
    <a href="/Videos/tutorial1">{$t("v.tut1")}</a>
    <Footer
            last_updated="06.04.2023"
            next_page_link="/Introduction/glossary"
            next_page_name={$t("menu.glossary")}>
    </Footer>
</div>