const nodes_description = [
    {
        "name": "UIDL List",
        "image": "/assets/imgs/uidl_list.png",
        "description": "Represents an abstract list (think about <ul> tag in html) described in UIDL language, has 2 inputs 2 text fields and 1 output (output data in String type)",
        "category": "UIDL",
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
        "output": `
[{
    "id": "gq84kOpXnkFihlXzTNGS1",
    "text": "Some text",
    "className": "bg-red",
    "style": [],
    "children": []
}]`,
        "behavior": "Default"
    },
    {
        "name": "UIDL List Item",
        "image": "/assets/imgs/uidl_list_item.png",
        "category": "UIDL",
        "description": `Represents an abstract list item (think about <li> tag in html) described in UIDL language, has 4 inputs 4 text fields and 1 output (output data in String type)`,
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
                "desc": "- transforms key:value pairs separated by comma into an Object with"
            },
            {
                "name": "Expanded",
                "desc": "- boolean parameter, uses for dropdowns e.t.c (false by default);"
            },
        ],
        "output": `
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
        "behavior": "Default"
    },
    {
        "name": "push to array",
        "image": "/assets/imgs/toArray.png",
        "category": "utilities",
        "description": "Gathers data from inputs and pushes into array, to adding new input use double click",
        "inputs": [
            {
                "name": "Item_(n+)",
                "desc": "- accepts data in type of String;"
            }
        ],
        "fields": [],
        "output": `["string1","string2", n+...]`,
        "behavior": "onDblClick() - adds new input slot"
    },
    {
        "name": "style CSS",
        "image": "/assets/imgs/styleCSS.png",
        "category": "utilities",
        "description": "Gathers data from inputs and pushes into array, to adding new input use double click",
        "inputs": [],
        "fields": [{
            "name": "Rule_(n+)",
            "desc": "- transforms style rules key:value pairs separated by comma into an Object , example: ('width':'100%', 'height':'100vh');"
        }],
        "output": `{"width":" 100%","height":" 100vh"}`,
        "behavior": "onDblClick() - adds new text field"
    },
    {
        "name": "Export data to preview",
        "image": "/assets/imgs/exportPreview.png",
        "category": "utilities",
        "description": "Exports UIDL data to preview inside CMS",
        "inputs": [
            {
                "name": "Data",
                "desc": "- accepts data in type of Any;"
            }
        ],
        "fields": [],
        "output": ``,
        "behavior": "On button click exports UIDL data to Preview CMS module"
    },
    {
        "name": "Export Project",
        "image": "/assets/imgs/exportProject.png",
        "category": "utilities",
        "description": "Gathers all UIDL, Actions and saves project into DB then downloads js modules with actions and 3d scenes, returns a link to current project",
        "inputs": [
            {
                "name": "Data",
                "desc": "- accepts data in type of Any;"
            }
        ],
        "fields": [
            {
                "name": "Link to project",
                "desc": "Link to JSON data of current project"
            }
        ],
        "output": ``,
        "behavior": "On button click saves project data and downloads js modules, then shows text field with link"
    },
    {
        "name": "On [...event]",
        "image": "/assets/imgs/triggernode.png",
        "category": "utilities",
        "description": "Passes data about which action by which event would be executed on UIDL List Item, connects to UIDL List Item",
        "inputs": [
            {
                "name": "Action",
                "desc": "- accepts Action nodes;"
            }
        ],
        "fields": [],
        "output": `
        {
        "id":"8SiJIjtkxjkc2F7yEn7we",
        "event":"...event name",
        "action": "...function name"
        }
        `,
        "behavior": "default"
    },
]
export default nodes_description;