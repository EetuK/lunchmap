<script lang="ts">
	import Filter from './Filter.svelte';
</script>

<div class="filter-container">
	<h2 class="heading">Filter by keyword</h2>

	<Filter />
</div>

<style>
	.filter-container {
		display: flex;
		flex: 1;
		flex-direction: column;
		width: 100%;
		padding-top: 16px;
	}

	.heading {
		font-size: 16px;
		font-weight: 600;
		margin-left: 16px;
	}
</style>
