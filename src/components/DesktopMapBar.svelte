<script lang="ts">
	import DesktopTabs, { type TabItem } from './DesktopTabs.svelte';

	export let items: TabItem[];
</script>

<aside class="container">
	<DesktopTabs {items} />
</aside>

<style>
	.container {
		position: relative;
		height: 100vh;
		width: 0;
		min-width: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		box-shadow: 0 0 0 2px rgb(0 0 0 / 10%);

		width: 100%;
		max-width: 400px;
		justify-content: center;

		transition-property: min-width;
		transition-duration: 0.07s;
	}
</style>
