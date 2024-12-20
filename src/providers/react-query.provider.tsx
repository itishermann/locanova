import { TRPCProvider } from "@/trpc/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { PropsWithChildren } from "react";

export function ReactQueryProvider({ children }: PropsWithChildren) {
	return (
		<TRPCProvider>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</TRPCProvider>
	);
}
