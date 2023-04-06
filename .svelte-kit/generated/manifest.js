const c = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/Introduction/getting-started.svelte"),
	() => import("../../src/routes/Introduction/glossary.svelte"),
	() => import("../../src/routes/Introduction/welcome.svelte"),
	() => import("../../src/routes/Engines/babylonjs.svelte"),
	() => import("../../src/routes/Engines/threejs.svelte"),
	() => import("../../src/routes/Engines/verge3d.svelte"),
	() => import("../../src/routes/Videos/tutorial1.svelte"),
	() => import("../../src/routes/about.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/Introduction/getting-started.svelte
	[/^\/Introduction\/getting-started\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/Introduction/glossary.svelte
	[/^\/Introduction\/glossary\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/Introduction/welcome.svelte
	[/^\/Introduction\/welcome\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/Engines/babylonjs.svelte
	[/^\/Engines\/babylonjs\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/Engines/threejs.svelte
	[/^\/Engines\/threejs\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/Engines/verge3d.svelte
	[/^\/Engines\/verge3d\/?$/, [c[0], c[8]], [c[1]]],

	// src/routes/Videos/tutorial1.svelte
	[/^\/Videos\/tutorial1\/?$/, [c[0], c[9]], [c[1]]],

	// src/routes/about.svelte
	[/^\/about\/?$/, [c[0], c[10]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];