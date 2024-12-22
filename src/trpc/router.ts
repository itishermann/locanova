import { mergeRouters } from "./init";

export const appRouter = mergeRouters();
// export type definition of API
export type AppRouter = typeof appRouter;
