import type { Readable } from 'svelte/store';
import { derived } from 'svelte/store';
import type { LanyardData } from '$lib/lanyard';

export function activities(data: Readable<Partial<LanyardData> | undefined>) {
	return derived(data, ($data) => $data?.activities?.sort((a, b) => b.type - a.type));
}
