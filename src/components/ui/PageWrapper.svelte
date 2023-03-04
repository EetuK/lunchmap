<script lang="ts">
	import { onMount } from 'svelte';
	import vhCheck from 'vh-check';
	let innerWidth = 0;
	let innerHeight = 0;
	$: isMobile = innerWidth < 600;
	$: isLoading = innerWidth === innerHeight;

	onMount(() => {
		vhCheck();
	});
</script>

<svelte:window bind:innerWidth bind:innerHeight />
<!-- <main style={`width: ${innerWidth}px; height: ${innerHeight}; display: flex; flex-direction: row;`}> -->
<main class="container">
	{#if isLoading}
		<div />
	{:else if isMobile}
		<slot name="mobile" />
	{:else}
		<slot name="desktop" />
	{/if}
</main>

<style lang="scss">
	.container {
		width: 100vw;
		height: calc(100vh - var(--vh-offset, 0px));
		display: flex;
		flex-direction: row;
	}
</style>
