<script lang="ts">
	import type { Readable } from 'svelte/store';
	import type { LanyardData } from '$lib/lanyard';

	import DiscordStatus from './Status.svelte';

	export let data$: Readable<LanyardData>;
</script>

<div class="inline-block relative h-16">
	<img
		class="rounded-full"
		src={`https://cdn.discordapp.com/avatars/${$data$.discord_user.id}/${$data$.discord_user.avatar}${
			$data$.discord_user.avatar.startsWith('a_') ? '.gif' : '.png'
		}`}
		alt={`${$data$.discord_user.id}#${$data$.discord_user.discriminator}`}
		height={64}
		width={64}
	/>
	<DiscordStatus {data$} />
</div>
