<script lang="ts">
	import type { Readable } from 'svelte/store';
	import type { LanyardData } from '$lib/lanyard';

	import { status } from './status';

	export let data$: Readable<LanyardData | undefined>;

	const status$ = status(data$);
</script>

<div class="absolute h-6 w-6 -bottom-1 -right-1 border-[4px] border-dark-500 rounded-full {$status$}" />
