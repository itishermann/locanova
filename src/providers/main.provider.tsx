import { Toaster } from "@/components/ui/sonner";
import { ReactQueryProvider } from "@/providers/react-query.provider";
import type { PropsWithChildren } from "react";
import { ThemeProvider } from "./theme.provider";

export function MainProvider({ children }: PropsWithChildren) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<ReactQueryProvider>{children}</ReactQueryProvider>
			<Toaster />
		</ThemeProvider>
	);
}
