<script lang="ts">
	import MultiSelect from 'svelte-multiselect';
	import { restaurantKeywordsAndCategories } from '../stores/restaurantsStore';
	import { arrayToStringArray, getQueryStringArray, routeStore } from '../stores/routeStore';
	import Icon from './ui/Icon.svelte';

	const filterNotSelected = (option: string) => (value: string) => value !== option;
</script>

<div class="container">
	<MultiSelect
		options={restaurantKeywordsAndCategories}
		placeholder="Filters"
		selected={getQueryStringArray($routeStore.query.filterWords)}
		focusInputOnSelect={false}
		on:change={({ detail: { option, type } }) => {
			const wordsArray = getQueryStringArray($routeStore.query.filterWords);
			if (type === 'add' && option && typeof option === 'string') {
				$routeStore.query.filterWords = arrayToStringArray([...wordsArray, option]);
			}
			if (type === 'remove' && option && typeof option === 'string') {
				$routeStore.query.filterWords = arrayToStringArray(
					wordsArray?.filter(filterNotSelected(option)) ?? undefined
				);
			}
			if (type === 'removeAll') {
				$routeStore.query.filterWords = arrayToStringArray();
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

		--sms-options-max-height: 250px;
	}
</style>
