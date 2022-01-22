<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';
	import DiscordProfile from '$lib/components/discord/Profile.svelte';
	import GitHub from '$lib/components/socials/GitHub.svelte';
	import Instagram from '$lib/components/socials/Instagram.svelte';
	import Twitter from '$lib/components/socials/Twitter.svelte';
</script>

<div class="grid place-items-center h-full">
	<div class="min-w-72">
		<Heading>
			<h1 class="font-sans antialiased font-medium text-4xl text-center select-none my-4" slot="heading">
				<span>Hey, I'm </span><span class="text-sky-500">Crawl</span><span class="animate-blink">|</span>
			</h1>
		</Heading>
		<DiscordProfile />
		<div class="grid grid-flow-col place-items-center mt-4">
			<GitHub />
			<Instagram />
			<Twitter />
		</div>
	</div>
</div>
