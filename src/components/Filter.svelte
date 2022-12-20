<script lang="ts">
	import { restaurantKeywordsAndCategories } from '../stores/restaurantsStore';
	import MultiSelect from 'svelte-multiselect';
	import { filterWords } from '../stores/filterStore';
</script>

<div class="container">
	<MultiSelect
		options={restaurantKeywordsAndCategories}
		placeholder="Filters"
		selected={$filterWords}
		focusInputOnSelect={false}
		on:change={({ detail: { option, type } }) => {
			if (type === 'add' && option && typeof option === 'string') {
				$filterWords = [...$filterWords, option];
			}
			if (type === 'remove' && option && typeof option === 'string') {
				$filterWords = $filterWords.filter((value) => value !== option);
			}
			if (type === 'removeAll') {
				$filterWords = [];
			}
		}}
	>
		<span let:option slot="selected">{option}</span>
	</MultiSelect>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding-bottom: 16px;
		border-bottom: 1px solid var(--lavender-light);
		font-size: 16px;
	}

	:global(div.multiselect) {
		font-size: 0.85rem;
		min-height: 40px;
		padding-top: 4px;
		padding-bottom: 4px;
		width: auto;
		margin-left: 16px;
		margin-right: 16px;
		border-radius: 8px;
		font-size: 16px;
	}
</style>
