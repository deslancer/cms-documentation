<script>
    import {t} from "../../i18n/i18n.js";
    import Prism from "../../components/PrismJS.svelte";

    $:nodes_arr = [
        {
            "name": "UIDL List",
            "image": "/assets/imgs/uidl_list.png",
            "description": [$t("cms_nodes.uidl_list")],
            "inputs": [
                {
                    "name": "Children",
                    "desc": "- accepts only an array;"
                },
                {
                    "name": "Styles",
                    "desc": "- accepts only an array;"
                }
            ],
            "fields": [
                {
                    "name": "Inner Text",
                    "desc": "- plain text which you can use in markup;"
                },
                {
                    "name": "Class Name",
                    "desc": "- optional parameter, you can use to pre define html class name;"
                }
            ],
            "output_example": `
[{
    "id": "gq84kOpXnkFihlXzTNGS1",
    "text": "Some text",
    "className": "bg-red",
    "style": [],
    "children": []
}]`,
            "behavior": "default"
        },
        {
            "name": "UIDL List Item",
            "image": "/assets/imgs/uidl_list_item.png",
            "description": [$t("cms_nodes.uidl_list_item")],
            "inputs": [
                {
                    "name": "Children",
                    "desc": "- accepts only an array;"
                },
                {
                    "name": "Styles",
                    "desc": "- accepts only an array;"
                },
                {
                    "name": "Events",
                    "desc": "- accepts only Trigger nodes output;"
                },
                {
                    "name": "Icon",
                    "desc": "- accepts string with URL for icon image;"
                }
            ],
            "fields": [
                {
                    "name": "Inner Text",
                    "desc": "- plain text which you can use in markup;"
                },
                {
                    "name": "Class Name",
                    "desc": "- optional parameter, you can use to pre define html class name;"
                },
                {
                    "name": "Metadata",
                    "desc": "- transforms into Object with key:value pairs written by comma"
                },
                {
                    "name": "Expanded",
                    "desc": "- boolean parameter, uses for dropdowns e.t.c (false by default);"
                },
            ],
            "output_example": `
{
  "id": "eVwRKbRcYxOLuti5MbEx4",
  "name": "Some menu item",
  "className": "bg-red",
  "style": [],
  "children": [],
  "events": "",
  "icon": "",
  "expanded": false,
  "metadata": "{'someKey':'someValue'}"
}
            `,
            "behavior": "default"
        }
    ]

</script>

<div class="container-sm overflow-y-auto">
    <h1>{$t("cms_nodes.header")}</h1>
    <p class="fs-6 mt-4">{$t("cms_nodes.desc")}</p>
    {#each nodes_arr as node}
        <div class="card my-4 bg-transparent" style="max-width: 100%;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={node.image} width="400" class="img-fluid rounded-start" alt={node.name}>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title fw-semibold">{node.name}</h5>
                        <p class="card-text">{node.description}</p>
                        <h6 class="card-title">Inputs:</h6>
                        <ul class="list-group my-4">
                            {#each node.inputs as input}
                            <li class="list-group-item bg-transparent text-white"><span style="color: #FFB422">&#9737; {input.name} </span>{input.desc}</li>
                            {/each}
                        </ul>
                        <h6 class="card-title">Text Fields:</h6>
                        <ul class="list-group my-4">
                            {#each node.fields as field}
                                <li class="list-group-item bg-transparent text-white"><span style="color: #FFB422">&#9868; {field.name} </span>{field.desc}</li>
                            {/each}
                        </ul>
                        <h6 class="card-title">Node Behavior:</h6>
                        <p class="card-text"><a href="/Litegraph/essentials#node_behavior">{node.behavior}</a></p>
                        {#if node.output_example}
                            <h6 class="card-title">Example output UIDL content:</h6>
                            <Prism language="json" code="{node.output_example}" header=""/>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    {/each}

</div>
