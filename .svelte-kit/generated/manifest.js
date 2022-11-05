const c = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/getting-started.svelte"),
	() => import("../../src/routes/quick-setup.svelte"),
	() => import("../../src/routes/babylonjs.svelte"),
	() => import("../../src/routes/threejs.svelte"),
	() => import("../../src/routes/verge3d.svelte"),
	() => import("../../src/routes/welcome.svelte"),
	() => import("../../src/routes/about.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/getting-started.svelte
	[/^\/getting-started\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/quick-setup.svelte
	[/^\/quick-setup\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/babylonjs.svelte
	[/^\/babylonjs\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/threejs.svelte
	[/^\/threejs\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/verge3d.svelte
	[/^\/verge3d\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/welcome.svelte
	[/^\/welcome\/?$/, [c[0], c[8]], [c[1]]],

	// src/routes/about.svelte
	[/^\/about\/?$/, [c[0], c[9]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];