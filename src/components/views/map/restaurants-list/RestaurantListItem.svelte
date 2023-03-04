<script lang="ts">
	export let name: string;
	export let categories: string[];
	export let keywords: string[];
</script>

<div class="container">
	<div>
		{#each categories as category}
			<span class="category">{category}</span>
		{/each}
	</div>
	<div class="title-row">
		<span class="name">{name}</span>
	</div>
	<div>
		{#each keywords as keyword}
			<span class="keyword">{keyword}</span>
		{/each}
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		padding-top: 8px;
		padding-bottom: 8px;
		padding-left: 16px;
		padding-right: 16px;
		margin-top: 8px;
		margin-bottom: 8px;
	}

	.title-row {
		margin-bottom: 4px;
	}

	.container:hover {
		background-color: var(--lavender-light);
	}

	.name {
		font-size: 1rem;
		font-weight: 600;
	}

	.category {
		margin-bottom: 4px;
		margin-right: 4px;
		font-size: 0.85rem;
		font-weight: 400;
		color: var(--turqoise);
	}

	.keyword {
		margin: 2px;
		padding-top: 2px;
		padding-bottom: 2px;
		padding-left: 4px;
		padding-right: 4px;
		border-radius: 16px;
		font-size: 0.65rem;
		font-weight: 500;
		border: 1px solid var(--crayola);
		color: var(--crayola);
		text-transform: uppercase;
		text-decoration: none;
	}
</style>
