<script>
    import {t} from "../i18n/i18n.js";

    export let last_updated;
    export let next_page_link;
    export let next_page_name;
</script>

<div class="d-flex my-4 justify-content-between">
    <div class="fst-italic">{$t("g.last_update")} {last_updated}</div>
    <div><a href={next_page_link}>{next_page_name} &rarr;</a></div>
</div>