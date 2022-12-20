<script lang="ts">
	import { browser } from '$app/environment';
	import 'leaflet/dist/leaflet.css';
	import { LeafletMap, TileLayer } from 'svelte-leafletjs?client';
	import { isSettingLocation } from '../stores/viewStore';
	import { filteredRestaurants, type Restaurant } from '../stores/restaurantsStore';
	import {
		preferences,
		setHomeCoordinates,
		type HomeCoordinates
	} from '../stores/preferencesStore';
	import Markers from './Markers.svelte';
	import HomeMarker from './HomeMarker.svelte';
	import L from 'leaflet';
	import type { Unsubscriber } from 'svelte/store';
	import { onMount } from 'svelte';

	let unsubscriber: Unsubscriber | null = null;
	let map: any;

	const mapOptions = {
		zoom: 16,
		zoomControl: true,
		trackResize: true
	};
	const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	const tileLayerOptions = {
		minZoom: 0,
		maxZoom: 20,
		maxNativeZoom: 19,
		attribution: '© OpenStreetMap contributors'
	};

	function getRestaurantAndHomeBounds(
		restaurants: Restaurant[],
		homeCoordinates?: HomeCoordinates
	) {
		const restaurantCoords: L.LatLngExpression[] = restaurants.map((restaurant) => {
			return [restaurant.lat, restaurant.lon];
		});
		if (homeCoordinates) {
			restaurantCoords.push([homeCoordinates.lat, homeCoordinates.lon]);
		}
		return L.latLngBounds(restaurantCoords);
	}

	function onMapClick({ latlng }: L.LeafletMouseEvent) {
		if ($isSettingLocation === 'inactive') {
			return;
		}
		$isSettingLocation = 'set';

		if (latlng.lat && latlng.lng) {
			setHomeCoordinates(preferences, { lat: latlng.lat, lon: latlng.lng });
		}
	}

	onMount(() => {
		unsubscriber = filteredRestaurants.subscribe((restaurants) => {
			const bounds = getRestaurantAndHomeBounds(restaurants, $preferences.homeCoordinates);
			map && map.getMap().fitBounds(bounds, L.point(200, 300));
		});

		map && map.getMap().on('click', onMapClick);
	});
</script>

{#if browser}
	<LeafletMap bind:this={map} options={mapOptions}>
		<TileLayer url={tileUrl} options={tileLayerOptions} />
		<HomeMarker />
		{#if $isSettingLocation === 'inactive'}
			<Markers restaurants={$filteredRestaurants ?? []} />
		{/if}
	</LeafletMap>
{/if}
