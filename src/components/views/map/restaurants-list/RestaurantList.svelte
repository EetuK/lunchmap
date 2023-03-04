<script>
	import RestaurantListItem from './RestaurantListItem.svelte';
	import { filteredRestaurants } from '../../../../stores/restaurantsStore';
</script>

<div class="list">
	{#each $filteredRestaurants as restaurant}
		<RestaurantListItem
			name={restaurant.name}
			categories={restaurant.categoryArray}
			keywords={restaurant.keywordArray}
		/>
	{/each}
</div>

<style>
	.list {
		display: flex;
		flex-direction: column;
		flex: 1;
		width: 100%;
		overflow-y: scroll;
	}
</style>
