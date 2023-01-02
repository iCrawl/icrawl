<script>
	let className;

	export { className as class };
	export let href;
	export let label;
</script>

<a aria-label={label} class={className} {href} rel="noopener noreferrer" target="_blank" title={label}>
	<slot />
</a>
