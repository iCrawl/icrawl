<script lang="ts">
	import type { Readable } from 'svelte/store';
	import { status } from './status';
	import type { LanyardData } from '$lib/lanyard';

	export let data$: Readable<Partial<LanyardData> | undefined>;

	const status$ = status(data$);
</script>

<div class="absolute h-6 w-6 -bottom-1 -right-1 border-[4px] border-dark-500 rounded-full {$status$}" />
