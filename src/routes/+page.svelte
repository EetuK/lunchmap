<script>
	import MainView from '../components/MainView.svelte';
</script>

<MainView />

<style lang="scss">
	:global(body) {
		margin: 0;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
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

		--primary-color-1: #b53c3c;
		--primary-color-2: #ffa631;

		--helper-color-1: #333333;
		--helper-color-2: #666666;
		--helper-color-3: #999999;
		--helper-color-4: #cccccc;
		--helper-color-5: #ffffff;
	}
</style>
