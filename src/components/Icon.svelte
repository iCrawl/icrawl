<script>
	import { clsx } from "clsx";

	let className;

	export { className as class };
	export let icon;
</script>

<span aria-hidden="true" class={clsx(["inline-block", className, icon])} />
