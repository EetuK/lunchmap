<script lang="ts">
	import { routeStore } from '../stores/routeStore';
	import type { TabItem } from './DesktopTabs.svelte';
	export let items: TabItem[];

	const handleClick = (tabId: string) => () => ($routeStore.query.view = tabId);
</script>

<div class="container">
	<div class="content">
		{#each items as item}
			{#if $routeStore.query.view == item.id}
				<svelte:component this={item.component} />
			{/if}
		{/each}
	</div>
	<div class="nav">
		{#each items as item}
			<div class="button" on:click={handleClick(item.id)}>
				{item.label}
			</div>
		{/each}
	</div>
</div>

<style>
	.container {
		display: flex;
		height: 100%;
		width: 100%;
		flex-direction: column;
	}
	.content {
		display: flex;
		height: calc(100% - 50px);
	}
	.nav {
		display: flex;
		justify-content: space-evenly;
		height: 50px;
	}
	.button {
		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center;
		border: 1px solid black;
	}
</style>
