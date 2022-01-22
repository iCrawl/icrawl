<script lang="ts">
	import type { Readable } from 'svelte/store';
	import type { LanyardData } from '$lib/lanyard';

	export let data$: Readable<LanyardData>;
</script>

<div>
	<h2 class="font-sans antialiased text-xs font-bold uppercase text-gray-400">Listening to spotify</h2>
	<div class="flex gap-2 items-center mt-2">
		<img
			class="inline-block rounded-md"
			src={$data$.spotify?.album_art_url}
			alt={$data$.spotify?.album}
			height={60}
			width={60}
		/>
		<div class="flex flex-col">
			{#if $data$.spotify?.song}
				<h5 class="font-sans antialiased text-sm font-bold">{$data$.spotify.song}</h5>
			{/if}
			{#if $data$.spotify?.artist}
				<p class="font-sans antialiased text-sm">by {$data$.spotify.artist.replaceAll(';', ',')}</p>
			{/if}
			{#if $data$.spotify?.album}
				<p class="font-sans antialiased text-sm">on {$data$.spotify.album}</p>
			{/if}
		</div>
	</div>
</div>
