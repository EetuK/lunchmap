<script context="module" lang="ts">
	export interface TabItem {
		label: string;
		id: ViewId;
		component: any;
	}

	export enum ViewId {
		Restaurants = 'restaurants',
		Filters = 'filters',
		Map = 'map',
		Settings = 'settings'
	}
</script>

<script lang="ts">
	import { routeStore } from '../../../stores/routeStore';
	import TabButton from '../../ui/TabButton.svelte';

	export let items: TabItem[] = [];

	const handleClick = (tabId: ViewId) => ($routeStore.query.view = tabId);
</script>

<div>
	{#each items as item}
		<TabButton
			tabItem={item}
			{handleClick}
			isLabelShown={true}
			isActive={$routeStore.query.view === item.id}
		/>
	{/each}
</div>
{#each items as item}
	{#if $routeStore.query.view == item.id}
		<svelte:component this={item.component} />
	{/if}
{/each}

<style>
	div {
		display: flex;
		padding: 16px;
		width: 100%;
		max-height: 40px;
		justify-content: space-evenly;
	}
</style>
