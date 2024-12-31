import { upsertLegalInformationUseCase } from "@/lib/user/application/use-cases/upsert-legal-information.use-case";
import { protectedProcedure } from "@/trpc/init";
import { z } from "zod";

const upsertLegalInformationProcedureInputSchema = z.object({
	firstName: z.string(),
	lastName: z.string(),
	birthPlace: z.string().nullable(),
	// date must be in the past
	birthDate: z
		.date()
		.refine((date) => date < new Date(), {
			message: "Date must be in the past",
		})
		.nullable(),
});

const upsertLegalInformationProcedureOutputSchema = z.object({
	firstName: z.string(),
	lastName: z.string(),
	birthPlace: z.string().nullable(),
	birthDate: z.date().nullable(),
	userId: z.string(),
});

export const upsertLegalInformationProcedure = protectedProcedure
	.input(upsertLegalInformationProcedureInputSchema)
	.output(upsertLegalInformationProcedureOutputSchema)
	.mutation(
		async ({
			ctx: {
				user: { id: userId },
			},
			input,
		}) =>
			upsertLegalInformationUseCase(
				userId,
				input.firstName,
				input.lastName,
				input.birthPlace,
				input.birthDate,
			),
	);
