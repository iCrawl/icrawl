<script>
	import 'virtual:windi.css';

	import { browser, dev } from '$app/env';

	if (browser) {
		if (dev) {
			import('virtual:windi-devtools');
		}
	}
</script>

<div class="h-screen w-screen bg-light-500 text-dark-500 dark:bg-dark-500 dark:text-light-500">
	<div class="h-full container mx-auto">
		<slot />
	</div>
</div>
