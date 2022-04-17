<script lang="ts">
	import type { Readable } from 'svelte/store';
	import DiscordStatus from './Status.svelte';
	import LoaderIcon from '../icons/Loader.svelte';
	import type { LanyardData } from '$lib/lanyard';

	export let data$: Readable<Partial<LanyardData>>;
</script>

<div class="inline-block relative h-16">
	{#if $data$.discord_user}
		<img
			class="rounded-full"
			src={`https://cdn.discordapp.com/avatars/${$data$.discord_user.id}/${$data$.discord_user.avatar}${
				$data$.discord_user?.avatar.startsWith('a_') ? '.gif' : '.png'
			}`}
			alt={`${$data$.discord_user.username}#${$data$.discord_user.discriminator}`}
			height={64}
			width={64}
		/>
		<DiscordStatus {data$} />
	{:else}
		<LoaderIcon />
	{/if}
</div>
