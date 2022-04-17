<script lang="ts">
	import type { Readable } from 'svelte/store';
	import DiscordStatus from './Status.svelte';
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
	{:else}
		<img src="/img/81c0df2befe565b05018da6b026babb0.png" alt="" class="rounded-full" height={64} width={64} />
	{/if}
	<DiscordStatus {data$} />
</div>
