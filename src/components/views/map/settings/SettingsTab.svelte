<script lang="ts">
	import { isSettingLocation } from '../../../../stores/viewStore';
</script>

<div class="container">
	{#if $isSettingLocation === 'inactive'}
		<button
			on:click={() => {
				$isSettingLocation = 'active';
			}}>Click to configure your current position</button
		>
	{:else if $isSettingLocation === 'active'}
		<button
			disabled
			on:click={() => {
				$isSettingLocation = 'set';
			}}>Click on the map to select position...</button
		>
	{:else}
		<button
			on:click={() => {
				$isSettingLocation = 'inactive';
			}}>Save selected location</button
		>
	{/if}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		flex: 1;
	}
</style>
