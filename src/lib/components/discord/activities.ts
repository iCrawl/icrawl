import type { LanyardData } from '$lib/lanyard';
import type { Readable } from 'svelte/store';
import { derived } from 'svelte/store';

export function activities(data: Readable<LanyardData | undefined>) {
	return derived(data, ($data) => $data?.activities.sort((a, b) => b.type - a.type));
}
