<script>
    import { t, locale, locales } from "../i18n/i18n";

</script>
<nav class="navbar navbar-expand-lg border-grey">
    <div class="container-fluid justify-content-between">
        <a class="navbar-brand" href="#">
            <img src="/assets/imgs/ve-logo.svg" alt="logo">
        </a>
        <div class="d-flex">
            <select bind:value={$locale}>
                {#each locales as l}
                    <option value={l}>{l}</option>
                {/each}
            </select>
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">CMS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">GitHub</a>
                </li>
            </ul>
        </div>
    </div>
</nav>


<style>
    .border-grey {
        border-bottom: 1px solid #6B6C70;
    }
</style>