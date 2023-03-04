<script lang="ts">
	import { routeStore } from '../../../stores/routeStore';
	import { ViewId, type TabItem } from './DesktopTabs.svelte';
	import Icon from '../../ui/Icon.svelte';
	export let items: TabItem[];

	const handleClick = (tabId: ViewId) => () => ($routeStore.query.view = tabId);

	const getNavIcon = (item: TabItem) => {
		if (item.id === ViewId.Filters) {
			return 'faFilter';
		}
		if (item.id === ViewId.Map) {
			return 'faMap';
		}
		if (item.id === ViewId.Restaurants) {
			return 'faListUl';
		}
		if (item.id === ViewId.Settings) {
			return 'faCogs';
		}
	};

	const getIconColor = (item: TabItem, isActive: boolean) => {
		return isActive ? 'black' : 'black';
	};
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
			<div
				class="button-container"
				class:active={$routeStore.query.view == item.id}
				on:click={handleClick(item.id)}
			>
				<Icon
					icon={getNavIcon(item)}
					color={getIconColor(item, $routeStore.query.view == item.id)}
				/>
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
		height: calc(100% - 60px);
	}
	.nav {
		display: flex;
		justify-content: space-evenly;
		height: 60px;
		background-color: var(--white);
		border-top: 1px solid var(--lavender-gray);
	}
	.button-container {
		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center;
		border-radius: 12px;
		margin-top: 8px;
		margin-bottom: 8px;
		margin-left: 16px;
		margin-right: 16px;
		background-color: var(--white);
	}

	.active {
		background-color: rgba(0, 70, 0, 0.12);
	}
</style>
