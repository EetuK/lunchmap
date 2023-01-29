<script context="module" lang="ts">
	export interface TabItem {
		label: string;
		id: string;
		component: any;
	}
</script>

<script lang="ts">
	import { routeStore } from '../stores/routeStore';

	export let items: TabItem[] = [];

	const handleClick = (tabId: string) => () => ($routeStore.query.view = tabId);
</script>

<ul>
	{#each items as item}
		<li class={$routeStore.query.view === item.id ? 'active' : ''}>
			<span on:click={handleClick(item.id)}>{item.label}</span>
		</li>
	{/each}
</ul>
{#each items as item}
	{#if $routeStore.query.view == item.id}
		<svelte:component this={item.component} />
	{/if}
{/each}

<style>
	ul {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		width: 100%;
		padding-left: 0;
		list-style: none;
		border-bottom: 1px solid var(--lavender-light) !important;
		padding-bottom: 8px;
		margin-bottom: 16px;
	}

	li {
		font-size: 0.85rem;
		margin-bottom: -1px;
		color: var(--green-gray);
	}

	li.active > span {
		color: var(--black);
		font-weight: 600;
	}

	span {
		display: block;
		padding-top: 4px;
		padding-bottom: 4px;
		padding-left: 8px;
		padding-right: 8px;
		cursor: pointer;
	}

	span:hover {
		border-color: #e9ecef #e9ecef #dee2e6;
	}

	.box {
		width: 100%;
	}
</style>
