<script lang="ts">
	import type { LanyardDiscordActivity } from '$lib/lanyard';

	export let activity: LanyardDiscordActivity;

	function formatTimestamp(start: number) {
		const current = Math.floor((Date.now() - start) / 1000);
		return `${
			Math.floor(current / 60) >= 60
				? `${Math.floor(Math.floor(current / 60) / 60).toLocaleString('en-US', {
						minimumIntegerDigits: 2,
						useGrouping: false,
				  })}:`
				: ``
		}${Math.floor(Math.floor(current / 60) - Math.floor(Math.floor(current / 60) / 60) * 60).toLocaleString('en-US', {
			minimumIntegerDigits: 2,
			useGrouping: false,
		})}:${Math.floor(current % 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })} elapsed`;
	}
</script>

<div>
	<h2 class="font-sans antialiased text-xs font-bold uppercase text-gray-400">Playing a game</h2>
	<div class="flex gap-2 items-center mt-2">
		{#if activity.application_id && activity.assets?.large_image}
			<div class="inline-block relative">
				<img
					class="inline-block rounded-md"
					src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png`}
					alt={activity.assets?.large_text}
					height={60}
					width={60}
				/>
				{#if activity.assets?.small_image}
					<img
						class="absolute h-6 w-6 -bottom-1 -right-1 border-[4px] border-dark-500 rounded-full"
						src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.small_image}.png`}
						alt={activity.assets.small_text}
						width={24}
						height={24}
					/>
				{/if}
			</div>
		{/if}
		<div class="flex flex-col">
			<h3 class="font-sans antialiased text-sm font-bold">{activity.name}</h3>
			{#if activity.details}
				<p class="font-sans antialiased text-sm">{activity.details}</p>
			{/if}
			{#if activity.state}
				<p class="font-sans antialiased text-sm">{activity.state}</p>
			{/if}
			{#if activity.timestamps?.start}
				<p class="font-sans antialiased text-sm">{formatTimestamp(activity.timestamps.start)}</p>
			{/if}
		</div>
	</div>
</div>
