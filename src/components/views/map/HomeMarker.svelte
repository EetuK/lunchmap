<script lang="ts">
	import { Marker, Icon } from 'svelte-leafletjs?client';
	import { preferences } from '../../../stores/preferencesStore';

	const iconOptions = {
		iconUrl: '/icons/home-2-fill.png',
		iconSize: [32, 32]
	};
</script>

{#if $preferences.homeCoordinates}
	<Marker latLng={[$preferences.homeCoordinates.lat, $preferences.homeCoordinates.lon]}>
		<Icon options={iconOptions} />
	</Marker>
{/if}
