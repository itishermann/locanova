import { createContext } from "@/trpc/context";
import { appRouter } from "@/trpc/router";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (req: Request) =>
	fetchRequestHandler({
		endpoint: "/api/trpc",
		req,
		router: appRouter,
		createContext,
		onError: ({ error }) => {
			if (error.code === "INTERNAL_SERVER_ERROR") {
				// TODO: log error to sentry or glitchtip
				console.error("Something went wrong", error);
			}
		},
	});

export { handler as GET, handler as POST };
