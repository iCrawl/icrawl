import { readable } from "svelte/store";
import { browser } from "$app/env";

enum LanyardWebSocketOpcode {
	EVENT = 0,
	HELLO = 1,
	INITIALIZE = 2,
	HEARTBEAT = 3,
}

export type LanyardWebSocketEvent = "INIT_STATE" | "PRESENCE_UPDATE";

export interface LanyardTimestamps {
	start: number;
	end: number;
}

export interface LanyardSpotifyData {
	track_id: string;
	timestamps: LanyardTimestamps;
	song: string;
	artist: string;
	album_art_url: string;
	album: string;
}

export interface LanyardDiscordUser {
	username: string;
	public_flags: number;
	id: number;
	discriminator: string;
	avatar: string;
}

export interface LanyardDiscordEmoji {
	name: string;
	id: number;
	animated: boolean;
}

export interface LanyardDiscordParty {
	id: string;
}

export interface LanyardDiscordAssets {
	small_text: string;
	small_image: string;
	large_text: string;
	large_image: string;
}

export interface LanyardDiscordActivity {
	type: number;
	state: string;
	name: string;
	id: string;
	emoji?: LanyardDiscordEmoji;
	created_at: number;
	timestamps?: LanyardTimestamps;
	sync_id?: string;
	session_id?: string;
	party?: LanyardDiscordParty;
	flags?: number;
	details?: string;
	assets?: LanyardDiscordAssets;
	application_id?: number;
}

export interface LanyardData {
	spotify: LanyardSpotifyData | null;
	kv: { [key: string]: string };
	listening_to_spotify: boolean;
	discord_user: LanyardDiscordUser;
	discord_status: string;
	activities: LanyardDiscordActivity[];
	active_on_discord_mobile: boolean;
	active_on_discord_desktop: boolean;
	heartbeat_interval: number;
}

export interface LanyardWebSocketMessage {
	op: LanyardWebSocketOpcode;
	seq: number;
	t: LanyardWebSocketEvent;
	d: LanyardData;
}

type LanyardRestPossibleResponse = { data: LanyardData } | { error: { message: string; code: string } };

export type LanyardRestResponse = {
	success: boolean;
} & LanyardRestPossibleResponse;

export function lanyard(id: string) {
	return readable<Partial<LanyardData>>({}, (set) => {
		let ws: WebSocket;
		let interval: NodeJS.Timer;
		if (browser) {
			ws = new WebSocket("wss://api.lanyard.rest/socket");
			ws.addEventListener("message", ({ data }: { data: string }) => {
				const { op, d } = JSON.parse(data) as LanyardWebSocketMessage;

				switch (op) {
					case 0: {
						set(d);
						break;
					}
					case 1: {
						ws.send(JSON.stringify({ op: 2, d: { subscribe_to_id: id } }));
						interval = setInterval(() => {
							ws.send(JSON.stringify({ op: 3 }));
						}, d.heartbeat_interval);
						break;
					}
					default: {
						break;
					}
				}
			});
		}

		return () => {
			if (browser) {
				clearInterval(interval);
				ws.close();
			}
		};
	});
}
