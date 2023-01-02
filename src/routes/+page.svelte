<script>
	import ExternalLink from "../components/ExternalLink.svelte";
	import Icon from "../components/Icon.svelte";
</script>

<div class="m-auto flex max-w-2xl grow flex-col place-content-center px-8">
	<main>
		<section>
			<h1 class="text-6xl font-bold leading-tight">Hey, I'm <span class="text-sky">Crawl</span>!</h1>
			<h2 class="text-2xl font-light">Software Developer</h2>
		</section>
	</main>
	<footer>
		<nav class="mt-12 flex gap-4">
			<ExternalLink href="mailto:test@example.com" label="Email"
				><Icon class="text-2xl" icon="i-octicon-mail" />
			</ExternalLink>
			<ExternalLink href="https://github.com/iCrawl" label="GitHub"
				><Icon class="text-2xl" icon="i-octicon-mark-github-16" />
			</ExternalLink>
			<ExternalLink href="https://discord.gg/djs" label="Discord"
				><Icon class="text-2xl" icon="i-fa6-brands-discord" />
			</ExternalLink>
			<ExternalLink href="https://twitter.com/iCrawlToGo" label="Twitter"
				><Icon class="text-2xl" icon="i-fa6-brands-twitter" />
			</ExternalLink>
			<ExternalLink href="https://www.instagram.com/icrawltogo" label="Instagram"
				><Icon class="text-2xl" icon="i-fa6-brands-instagram" />
			</ExternalLink>
		</nav>
	</footer>
</div>
