<script lang="ts">
	import Fa from 'svelte-fa';
	import { faListUl, faFilter, faMap, faCogs } from '@fortawesome/free-solid-svg-icons';
	const iconOptions = {
		faListUl,
		faFilter,
		faMap,
		faCogs
	};
	export let color: string = 'black';
	export let size:
		| 'xs'
		| 'sm'
		| 'lg'
		| '1x'
		| '2x'
		| '3x'
		| '4x'
		| '5x'
		| '6x'
		| '7x'
		| '8x'
		| '9x'
		| '10x'
		| `${number}x` = '1x';
	export let icon: keyof typeof iconOptions = 'faListUl';
</script>

<Fa icon={iconOptions[icon]} {color} {size} />
