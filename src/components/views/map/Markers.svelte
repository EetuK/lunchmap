<script lang="ts">
	import { Marker, Popup, Tooltip } from 'svelte-leafletjs?client';
	import type { Restaurant } from '../../../stores/restaurantsStore';
	export let restaurants: Restaurant[] = [];
</script>

{#each restaurants as restaurant}
	<Marker latLng={[restaurant.lat, restaurant.lon]}>
		<Popup><b>{restaurant.name}</b></Popup>
		<Tooltip options={{ permanent: true }}>{restaurant.name}</Tooltip>
	</Marker>
{/each}
