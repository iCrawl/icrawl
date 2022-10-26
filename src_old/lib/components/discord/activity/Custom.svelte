<script lang="ts">
	import type { LanyardDiscordActivity } from '$lib/lanyard';

	export let activity: LanyardDiscordActivity;
</script>

<div>
	<h2 class="font-sans antialiased text-xs font-bold uppercase text-gray-400">Custom status</h2>
	<div class="flex gap-2 items-center mt-2">
		{#if activity.emoji}
			<img
				class="inline-block"
				src={`https://cdn.discordapp.com/emojis/${activity.emoji.id}.png`}
				alt={activity.emoji.name}
				height={20}
				width={20}
			/>
		{/if}
		{#if activity.state}
			<span class="font-sans antialiased text-sm">{activity.state}</span>
		{/if}
	</div>
</div>
