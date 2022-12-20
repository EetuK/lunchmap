<script context="module" lang="ts">
	export interface TabItem {
		label: string;
		value: number;
		component: any;
	}
</script>

<script lang="ts">
	export let items: TabItem[] = [];
	export let activeTabValue = 1;

	const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

<ul>
	{#each items as item}
		<li class={activeTabValue === item.value ? 'active' : ''}>
			<span on:click={handleClick(item.value)}>{item.label}</span>
		</li>
	{/each}
</ul>
{#each items as item}
	{#if activeTabValue == item.value}
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
