import { userRouter } from "@/lib/user/presentation/user.trpc";
import { router } from "./init";

export const appRouter = router({
	user: userRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
