import { auth } from "@/lib/shared/infrastructure/auth";
import type { Context } from "@/trpc/context";
import type { TRPCPanelMeta } from "@metamorph/trpc-panel";
import { TRPCError, initTRPC } from "@trpc/server";
import superjson from "superjson";

// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.meta<TRPCPanelMeta>().context<Context>().create({
	/**
	 * @see https://trpc.io/docs/server/data-transformers
	 */
	transformer: superjson,
});
// Base router and procedure helpers
export const router = t.router;
export const createCallerFactory = t.createCallerFactory;
export const publicProcedure = t.procedure;
export const mergeRouters = t.mergeRouters;
export const protectedProcedure = t.procedure.use(async (opts) => {
	const user = opts.ctx.session?.user;
	if (!user || !user.id) {
		throw new TRPCError({ code: "UNAUTHORIZED" });
	}
	await auth(); // <-- keep the session alive, this will update the session expiry every time its called.
	return opts.next({
		ctx: {
			user: {
				...user,
				id: user.id,
			},
		},
	});
});
