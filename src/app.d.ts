// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}

declare module '@beyonk/svelte-mapbox';

declare module 'leaflet?client' {
	import all from 'leaflet';
	export = all;
}

declare module '*?client';
declare module '*?server';

declare module '@fortawesome/free-solid-svg-icons/index.es' {
	export * from '@fortawesome/free-solid-svg-icons';
}