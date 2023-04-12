<script>
    import {t} from "../../i18n/i18n.js";
    import Footer from "../../components/Footer.svelte";
    import {graph_desc} from './essentials_data';
    import {node_behaviors} from "./essentials_data";

</script>
<div class="container-sm overflow-y-auto">
    <h1>{$t("ge_header")}</h1>
    <p class="fs-6 mt-4">{$t("ge_desc")}</p>
    <img src="/assets/imgs/nodes_essential.png" class="img-fluid" alt="litegraph">
    <div class="my-4">
        <h4 class="fw-bold">Basic node description</h4>
        <ol class="list-group list-group-numbered">
            {#each graph_desc as item }
                <li class="list-group-item bg-transparent text-white d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <div style="color: #FFB422" class="fw-bold">{item.name}</div>
                        {item.description}
                    </div>
                </li>
            {/each}
        </ol>
    </div>
    <div class="my-4">
        <h4 class="fw-bold">Basic node modes explanation:</h4>
        <p class="fs-6 mt-4">Each node can be in one of these mode: 'Always', 'On Event', 'Never', 'On Trigger'</p>
        <ul class="list-group list-group-flush">
            <li class="list-group-item bg-transparent text-white">
                <div class="ms-2 me-auto">
                    <div  class="fw-bold mb-2 align-items-center d-flex">
                        <svg height="18" width="18">
                            <circle cx="9" cy="9" r="9" fill="#12ec3e"/>
                        </svg>
                        <span class="mx-2"> - Always</span>
                    </div>
                    Node in 'Always' mode would pass data every render frame (for example 60 times per second).
                    <span class="fw-bold text-danger">Be careful with action nodes, because your function would call 60 or more times per second, which can brake system;</span>
                </div>
            </li>
            <li class="list-group-item d-flex bg-transparent text-white">
                <div class="ms-2 me-auto">
                    <div  class="fw-bold mb-2 align-items-center d-flex">
                        <svg height="18" width="18">
                            <circle cx="9" cy="9" r="9" fill="#196a66"/>
                        </svg>
                        <span class="mx-2"> - On Event</span>
                    </div>
                    In this mode node would execute its function or pass data only when event fired (event can by custom and defined when creating a node)
                </div>
            </li>
            <li class="list-group-item d-flex bg-transparent text-white">
                <div class="ms-2 me-auto">
                    <div  class="fw-bold mb-2 align-items-center d-flex">
                        <svg height="18" width="18">
                            <circle cx="9" cy="9" r="9" fill="#ef0a0a"/>
                        </svg>
                        <span class="mx-2"> - Never</span>
                    </div>
                    Node in 'Never' mode wouldn't execute function or pass any data.
                </div>

            </li>
            <li class="list-group-item d-flex bg-transparent text-white">
                <div class="ms-2 me-auto">
                    <div  class="fw-bold mb-2 align-items-center d-flex">
                        <svg height="18" width="18">
                            <circle cx="9" cy="9" r="9" fill="#1010bc"/>
                        </svg>
                        <span class="mx-2"> - On Trigger</span>
                    </div>
                    In node body would add event slot, which accepts event signal, when event would fire node execute its data or call function.
                    <span class="fw-bold text-warning">Notice, without calling event node won't execute its data or function and can return empty data;</span>
                </div>
            </li>
        </ul>
    </div>
    <div id="node_behavior" class="my-4">
        <h4 class="fw-bold">Basic node behavior explanation:</h4>
        <h5 class="my-2">Default behaviour:</h5>
        <p class="mb-4">
            To execute a graph you must press runStep button on panel.<br>

            This function will call the method node.onExecute() for every node in the graph.<br>

            The order of execution is determined by the system according to the morphology of the graph (nodes without inputs are considered level 0, then nodes connected to nodes of level 0 are level 1, and so on). This order is computed only when the graph morphology changes (new nodes are created, connections change).<br>

            It is up to the developer to decide how to handle inputs and outputs from inside the node.<br>

            The data send through outputs using this.setOutputData(0,data) is stored in the link, so if the node connected through that link does this.getInputData(0) it will receive the same data sent.<br>

            For rendering, the nodes are executed according to their order in the graph._nodes array, which changes when the user interact with the GraphCanvas (clicked nodes are moved to the back of the array so they are rendered the last).<br>
        </p>
        <ul class="list-group my-4">
            {#each node_behaviors as behavior}
                <li class="list-group-item bg-transparent text-white"><span class="font-monospace" style="color: #FFB422">&escr; {behavior.name} :&nbsp;</span>{behavior.desc}
                </li>
            {/each}
        </ul>
    </div>
    <Footer
            last_updated="11.04.2023"
            next_page_link="/Litegraph/cms-nodes"
            next_page_name="CMS Nodes">
    </Footer>
</div>