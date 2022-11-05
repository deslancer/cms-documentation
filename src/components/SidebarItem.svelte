<script>
    import {slide} from "svelte/transition";

    export let entry
    let isOpen = false
    const toggle = () => isOpen = !isOpen
</script>
<style>
    button {
        border: none;
        background: none;
        display: block;
        color: inherit;
        font-size: 16px;
        cursor: pointer;
        margin: 0;
        padding-bottom: 0.5em;
        padding-top: 0.5em
    }

    svg {
        transition: transform 0.2s ease-in;
    }

    [aria-expanded=true] svg {
        transform: rotate(0.25turn);
    }
    .list-group {
        --bs-list-group-bg:  #6B6C70;
    }
    .nav-link:hover {
        color: white;
    }
</style>
<button on:click={toggle} aria-expanded={isOpen}>
    {entry[0]}
    <svg  width="15" height="15" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
         viewBox="0 0 24 24" stroke="currentColor">
        <path d="M9 5l7 7-7 7"></path>
    </svg>
</button>
{#if isOpen}
    <ul class="list-group list-group-flush" transition:slide={{ duration: 300 }}>
        {#each entry[1] as item}
            <li class="list-group-item">
                <a class="nav-link" href="{item.link}">{item.name}</a>
            </li>
        {/each}
    </ul>
{/if}
