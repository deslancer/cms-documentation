<script lang="ts">
    import Header from "../components/Header.svelte";
    import Sidebar from "../components/Sidebar.svelte";
</script>

<main class="main-container">
    <div class="row">
        <div class="col position-fixed bg-main">
            <Header/>
        </div>
    </div>
    <div class="row content-container">
        <div class="col-2 sidebar position-fixed border-right-grey">
            <Sidebar/>
        </div>
        <div class="col-10 content">
            <div class="container-sm overflow-y-auto py-2 px-5">
                <slot />
            </div>
        </div>
    </div>
</main>
<style>
    .bg-main {
        background-color: #333438;
    }
    .main-container {
        background-color: #333438;
        color: white;
        height: 100vh;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .border-right-grey {
        border-right: 1px solid #6B6C70;
    }

    .content-container {
        height: calc(100% - 60px);
        margin-top: 60px;
    }
    .sidebar {
        height: 100%;
    }
    .content {
        margin-left: 10rem;
    }
</style>

