import { upsertLegalInformationProcedure } from "@/lib/user/presentation/procedures/upsert-legal-information.procedure";
import { router } from "@/trpc/init";

export const userRouter = router({
	legalInformations: {
		upsert: upsertLegalInformationProcedure,
	},
});
