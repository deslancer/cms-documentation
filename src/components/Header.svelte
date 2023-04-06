<script>
    import { t, locale, locales } from "../i18n/i18n";
</script>
<nav class="navbar navbar-expand-lg border-grey">
    <div class="container-fluid justify-content-between">
        <a class="navbar-brand" href="#">
            <img src="/assets/imgs/ve-logo.svg" alt="logo">
        </a>
        <div class="d-flex">
            <input class="form-control form-control-sm me-2" type="search" placeholder="Search" aria-label="Search">
            <select class="form-select form-select-sm" bind:value={$locale}>
                {#each locales as l}
                    <option value={l}>{l.toUpperCase()}</option>
                {/each}
            </select>
            <ul class="navbar-nav me-auto  mb-2 mb-lg-0">
                <li class="nav-item ">
                    <a class="nav-link text-white" aria-current="page" href="#">CMS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">GitHub</a>
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