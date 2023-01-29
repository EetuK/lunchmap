<script lang="ts">
	import DesktopMapBar from './DesktopMapBar.svelte';
	import PageWrapper from './PageWrapper.svelte';
	import RestaurantList from './RestaurantList.svelte';
	import SettingsTab from './SettingsTab.svelte';
	import type { TabItem } from './DesktopTabs.svelte';
	import MobileTabs from './MobileTabs.svelte';
	import Map from './Map.svelte';
	import FiltersTab from './FiltersTab.svelte';
	import { onMount } from 'svelte';
	import { routeStore } from '../stores/routeStore';

	const filtersTab = { label: 'Filters', id: 'filters', component: FiltersTab };
	const restaurantsTab = { label: 'Restaurants', id: 'restaurants', component: RestaurantList };
	const settingsTab = { label: 'Settings', id: 'settings', component: SettingsTab };
	const mobileMapTab = { label: 'Map', id: 'map', component: Map };

	const desktopItems: TabItem[] = [filtersTab, restaurantsTab, settingsTab];
	const mobileItems: TabItem[] = [restaurantsTab, filtersTab, mobileMapTab, settingsTab];

	onMount(() => {
		if (!$routeStore.query.view) {
			$routeStore.query.view = 'filters';
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
