<script lang="ts">
	import { lanyard } from '$lib/lanyard';

	import DiscordAvatar from './Avatar.svelte';
	import DiscordActivities from './Activities.svelte';

	const data$ = lanyard('81440962496172032');
</script>

{#if $data$}
	<div class="grid p-4 min-h-52 border-2 border-light-500/30 rounded-md">
		<div class="flex flex-col">
			<div class="flex flex-col gap-2">
				<div class="flex place-content-between">
					<DiscordAvatar {data$} />
				</div>
				<div>
					<h1 class="font-sans antialiased font-medium text-xl">
						{$data$.discord_user.username}<span class="text-gray-400">#{$data$.discord_user.discriminator}</span>
					</h1>
				</div>
			</div>
			{#if $data$.activities.length}
				<div class="mt-4">
					<DiscordActivities {data$} />
				</div>
			{/if}
		</div>
	</div>
{/if}
<noscript>
	<div class="grid gap-4 h-full place-items-center text-center">
		<p class="font-sans antialiased font-medium">
			Looks like you found out that my site works without JavaScript too, nice.
		</p>
		<h2 class="font-sans antialiased font-bold uppercase">Find my socials below:</h2>
	</div>
</noscript>
