export const graph_desc = [
    {
        name: "Input Slot",
        description: "Input slot can accept one of these types (String, Number, Array, Boolean, Object), an input can only" +
            " have one connection link. Color indicator shows state (green - connected, grey - free); Slot name can be anything. "
    },
    {
        name: "Output Slot",
        description: "Output slot can pass one of these types (String, Number, Array, Boolean, Object), an output can have" +
            " several connection links. Color indicator shows state (green - connected, grey - free); Slot name can be anything."
    },
    {
        name: "Node name",
        description: "Node name can be anything with type of String (best practice naming node as a function or by type " +
            "of data its contain)"
    },
    {
        name: "Node mode",
        description: "Node can be in one of these modes ('Always', 'On Event', 'Never', 'On Trigger'), detailed explanation" +
            " about node modes you can find below, color indicator shows in which mode current node"
    },
    {
        name: "Connection link slot",
        description: "Connection link slot allows you to add an any node between two target nodes"
    },
    {
        name: "Group",
        description: "Within the group, all nodes will move together, the size of the group can be edited to suit your needs"
    },
    {
        name: "Knob widget",
        description: "Allows you to change value from 0.00 to 1.00 with step 0.01"
    },
    {
        name: "Slider widget",
        description: "Allows you to change value from 0.000 to 1.000 with step 0.001"
    },
    {
        name: "Number widget",
        description: "Allows you to change number value with step 0.1 by default"
    },
    {
        name: "Combo widget",
        description: "Allows you to select between multiple choices"
    },
    {
        name: "Text widget",
        description: "Allows you to type single or multiline text"
    },
    {
        name: "Toggle widget",
        description: "Toggle widget behavior like checkbox"
    },
    {
        name: "Button widget",
        description: "Just button with onClick event"
    },
    {
        name: "Graph growth",
        description: "Graph possibility growth vertical"
    },

]
export const node_behaviors = [
    {
        name: "onAdded",
        desc: "called when node added to graph"
    },
    {
        name: "onRemoved",
        desc: "called when node removed from graph"
    },
    {
        name: "onStart",
        desc: "called when the graph starts playing"
    },
    {
        name: "onStop",
        desc: "called when the graph stops playing"
    },
    {
        name: "onDrawBackground",
        desc: "render custom node content on canvas (not visible in Live mode)"
    },
    {
        name: "onDrawForeground",
        desc: "render custom node content on canvas (on top of slots)"
    },
    {
        name: "onMouseDown,onMouseMove,onMouseUp,onMouseEnter,onMouseLeave",
        desc: "to catch mouse events"
    },
    {
        name: "onDblClick",
        desc: "double clicked on node in the editor"
    },
    {
        name: "onExecute",
        desc: "called when it is time to execute the node"
    },
    {
        name: "onPropertyChanged",
        desc: "when a property is changed in the panel (return true to skip default behaviour)"
    },
    {
        name: "onGetInputs",
        desc: "returns an array of possible inputs in the form of [ ['name','type'], [...], [...] ]"
    },
    {
        name: "onGetOutputs",
        desc: "returns an array of possible outputs"
    },
    {
        name: "onSerialize",
        desc: "before serializing, receives an object where to store data"
    },
    {
        name: "onSelected",
        desc: "selected in the graph, receives an object where to read data"
    },
    {
        name: "onDeselected",
        desc: "deselected from the graph"
    },
    {
        name: "onDropItem",
        desc: "DOM item dropped over the node"
    },
    {
        name: "onDropFile",
        desc: "file dropped over the node"
    },
    {
        name: "onConnectInput",
        desc: "if returns false the incoming connection will be canceled"
    },
    {
        name: "onConnectionsChange",
        desc: "a connection changed (new one or removed) (LiteGraph.INPUT or LiteGraph.OUTPUT, slot, true if connected, link_info, input_info )"
    },
]
