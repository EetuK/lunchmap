<script lang="ts">
	import { ViewId, type TabItem } from '../views/map/DesktopTabs.svelte';
	import Icon from './Icon.svelte';

	const getProperties = (
		item: TabItem
	): {
		icon: 'faFilter' | 'faMap' | 'faListUl' | 'faCogs';
		label: string;
	} => {
		if (item.id === ViewId.Filters) {
			return { icon: 'faFilter', label: 'Filters' };
		}
		if (item.id === ViewId.Map) {
			return { icon: 'faMap', label: 'Map' };
		}
		if (item.id === ViewId.Restaurants) {
			return { icon: 'faListUl', label: 'Restaurants' };
		}

		return { icon: 'faCogs', label: 'Settings' };
	};

	export let tabItem: TabItem;
	export let handleClick: (id: TabItem['id']) => void;
	export let isActive: boolean = false;
	export let isLabelShown: boolean = false;

	const onClick = () => handleClick(tabItem.id);
	const { icon, label } = getProperties(tabItem);
</script>

<button class="button-container" class:active={isActive} on:click={onClick}>
	<Icon {icon} color="black" />
	{#if isLabelShown}
		<span>{label}</span>
	{/if}
</button>

<style>
	.button-container {
		height: 35px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 4px;
		padding-left: 16px;
		padding-right: 16px;
		padding-top: 8px;
		padding-bottom: 8px;
		background-color: var(--white);
		border: none;
		flex: 0;
	}

	.button-container:hover {
		background-color: #ffdca8;
		cursor: pointer;
	}

	.active {
		background-color: #ffe9c7;
	}

	span {
		padding-left: 8px;
		font-size: 16px;
	}
</style>
