<script lang="ts">
	import { routeStore } from '../../../stores/routeStore';
	import type { TabItem, ViewId } from './DesktopTabs.svelte';
	import TabButton from '../../ui/TabButton.svelte';
	export let items: TabItem[];

	const handleClick = (tabId: ViewId) => ($routeStore.query.view = tabId);
</script>

<div class="container">
	{#each items as item}
		{#if $routeStore.query.view == item.id}
			<svelte:component this={item.component} />
		{/if}
	{/each}
	<div class="nav">
		{#each items as item}
			<TabButton tabItem={item} isActive={$routeStore.query.view == item.id} {handleClick} />
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

	.nav {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		min-height: 60px;
		background-color: var(--white);
		border-top: 1px solid var(--lavender-gray);
	}
</style>
