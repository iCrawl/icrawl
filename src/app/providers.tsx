"use client";

import { Provider } from "jotai";
import { ThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
	return (
		<ThemeProvider attribute="class">
			<Provider>{children}</Provider>
		</ThemeProvider>
	);
}
