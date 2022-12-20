<script lang="ts">
	import DesktopMapBar from './DesktopMapBar.svelte';
	import PageWrapper from './PageWrapper.svelte';
	import RestaurantList from './RestaurantList.svelte';
	import SettingsTab from './SettingsTab.svelte';
	import type { TabItem } from './DesktopTabs.svelte';
	import MobileTabs from './MobileTabs.svelte';
	import Map from './Map.svelte';
	import FiltersTab from './FiltersTab.svelte';

	const filtersTab = { label: 'Filters', value: 1, component: FiltersTab };
	const restaurantsTab = { label: 'Restaurants', value: 2, component: RestaurantList };
	const settingsTab = { label: 'Settings', value: 3, component: SettingsTab };
	const mobileMapTab = { label: 'Map', value: 4, component: Map };

	const desktopItems: TabItem[] = [filtersTab, restaurantsTab, settingsTab];
	const mobileItems: TabItem[] = [restaurantsTab, filtersTab, mobileMapTab, settingsTab];
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
