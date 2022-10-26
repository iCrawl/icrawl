<script>
	import Typewriter from 'svelte-typewriter';
</script>

<Typewriter cascade cursor={false} interval={[50, 60, 80]}>
	<slot name="heading" />
</Typewriter>
<noscript>
	<slot name="heading" />
</noscript>
