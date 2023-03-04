<script lang="ts">
	import DesktopMapBar from './DesktopMapBar.svelte';
	import PageWrapper from '../../ui/PageWrapper.svelte';
	import RestaurantList from './restaurants-list/RestaurantList.svelte';
	import SettingsTab from './settings/SettingsTab.svelte';
	import { ViewId, type TabItem } from './DesktopTabs.svelte';
	import MobileTabs from './MobileTabs.svelte';
	import Map from './Map.svelte';
	import FiltersTab from './filter/FiltersTab.svelte';
	import { onMount } from 'svelte';
	import { routeStore } from '../../../stores/routeStore';

	const filtersTab = { label: 'Filters', id: ViewId.Filters, component: FiltersTab };
	const restaurantsTab = {
		label: 'Restaurants',
		id: ViewId.Restaurants,
		component: RestaurantList
	};
	const settingsTab = { label: 'Settings', id: ViewId.Settings, component: SettingsTab };
	const mobileMapTab = { label: 'Map', id: ViewId.Map, component: Map };

	const desktopItems: TabItem[] = [filtersTab, restaurantsTab, settingsTab];
	const mobileItems: TabItem[] = [restaurantsTab, filtersTab, mobileMapTab, settingsTab];

	onMount(() => {
		if (!$routeStore.query.view) {
			$routeStore.query.view = ViewId.Filters;
		}
	});
</script>

<PageWrapper>
	<svelte:fragment slot="desktop">
		<DesktopMapBar items={desktopItems} />
		<Map />
	</svelte:fragment>
	<svelte:fragment slot="mobile"><MobileTabs items={mobileItems} /></svelte:fragment>
</PageWrapper>

<style>
</style>
