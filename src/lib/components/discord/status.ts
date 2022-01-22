import type { LanyardData } from '$lib/lanyard';
import type { Readable } from 'svelte/store';
import { derived } from 'svelte/store';

export function status(data: Readable<LanyardData | undefined>) {
	return derived(data, ($data) => {
		if ($data?.discord_status === 'dnd') {
			return 'bg-red-500';
		} else if ($data?.discord_status === 'idle') {
			return 'bg-yellow-500';
		} else if ($data?.active_on_discord_desktop) {
			return 'bg-green-500';
		} else if ($data?.active_on_discord_mobile) {
			return 'bg-green-500';
		}
		return 'bg-gray-500';
	});
}
