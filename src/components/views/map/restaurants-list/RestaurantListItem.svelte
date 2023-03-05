<script lang="ts">
	export let name: string;
	export let categories: string[];
	export let keywords: string[];
</script>

<button class="container">
	<div>
		<span class="category">{categories.join(' · ')}</span>
	</div>
	<div class="title-row">
		<span class="name">{name}</span>
	</div>
	<div>
		{#each keywords as keyword}
			<span class="keyword">{keyword}</span>
		{/each}
	</div>
</button>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding-top: 8px;
		padding-bottom: 8px;
		padding-left: 16px;
		padding-right: 16px;
		margin-top: 8px;
		margin-bottom: 8px;
		background-color: transparent;
		border: none;
		cursor: pointer;
	}

	.title-row {
		margin-bottom: 4px;
	}

	.container:hover .name {
		text-decoration: underline;
	}

	.name {
		font-size: 18px;
		font-weight: 600;
	}

	.category {
		margin-bottom: 4px;
		font-size: 14px;
		font-weight: 400;
		color: var(--turqoise);
	}

	.keyword {
		margin: 2px;
		padding-top: 2px;
		padding-bottom: 2px;
		padding-left: 4px;
		padding-right: 4px;
		border-radius: 4px;
		font-size: 14px;
		font-weight: 500;
		background-color: rgba(0, 70, 0, 0.066);
		color: var(--green-gray);
		text-transform: capitalize;
		text-decoration: none;
	}
</style>
