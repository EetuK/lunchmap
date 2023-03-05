<script>
	import MainView from '../components/views/map/MainView.svelte';
</script>

<MainView />

<style lang="scss">
	:global(body) {
		margin: 0;
		overflow: hidden;
	}

	:global(:root) {
		--turqoise: #0b3948;
		--green-gray: #416165;
		--crayola: #84a98c;
		--lavender-gray: #d0cdd7;
		--lavender-light: #eaeaf5;
		--white: #fff;
		--black: #090b0d;

		color: var(--black);
	}
</style>
