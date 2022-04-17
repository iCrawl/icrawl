import type { Readable } from 'svelte/store';
import { derived } from 'svelte/store';
import type { LanyardData } from '$lib/lanyard';

export function status(data: Readable<Partial<LanyardData> | undefined>) {
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
