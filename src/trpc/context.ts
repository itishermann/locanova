import { getSession } from "next-auth/react";

export async function createContext() {
	// Create your context based on the request object
	// Will be available as `ctx` in all your resolvers
	// This is just an example of something you might want to do in your ctx
	const session = await getSession();

	console.log("createContext for", session?.user?.name ?? "unknown user");

	return {
		session,
	};
}
export type Context = Awaited<ReturnType<typeof createContext>>;
