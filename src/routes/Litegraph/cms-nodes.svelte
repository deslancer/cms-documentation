<script>
    import {t} from "../../i18n/i18n.js";
    import Prism from "../../components/PrismJS.svelte";
    import nodes_description from "./nodes_description.js";
    import Footer from "../../components/Footer.svelte";
</script>

<div class="container-sm overflow-y-auto">
    <h1>{$t("cms_nodes.header")}</h1>
    <p class="fs-6 mt-4">{$t("cms_nodes.desc")}</p>
    {#each nodes_description as node}
        <div class="card my-4 bg-transparent" style="max-width: 100%;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={node.image} width="400" class="img-fluid rounded-start" alt={node.name}>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title fw-semibold">{node.name}</h5>
                        <p class="card-text">{node.description}</p>
                        <h6 class="card-title my-4">Category: {node.category}</h6>
                        {#if node.inputs.length > 0}
                            <h6 class="card-title">Inputs:</h6>
                            <ul class="list-group my-4">
                                {#each node.inputs as input}
                                    <li class="list-group-item bg-transparent text-white"><span style="color: #FFB422">&#9737; {input.name} </span>{input.desc}
                                    </li>
                                {/each}
                            </ul>
                        {/if}
                        {#if node.fields.length > 0}
                            <h6 class="card-title">Text Fields:</h6>
                            <ul class="list-group my-4">
                                {#each node.fields as field}
                                    <li class="list-group-item bg-transparent text-white"><span style="color: #FFB422">&#9868; {field.name} </span>{field.desc}
                                    </li>
                                {/each}
                            </ul>
                        {/if}
                        <a href="/Litegraph/essentials#node_behavior"><h6 class="card-title">Node Behavior:</h6></a>
                        <p class="card-text">{node.behavior}</p>
                        {#if node.output}
                            <h6 class="card-title">Output:</h6>
                            <Prism language="json" code="{node.output}" header=""/>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    {/each}
    <Footer
            last_updated="10.04.2023"
            next_page_link="/Litegraph/core-nodes"
            next_page_name="Core Nodes">
    </Footer>
</div>
