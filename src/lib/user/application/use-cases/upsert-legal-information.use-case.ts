import { prisma } from "@/lib/shared/infrastructure/prisma";

export async function upsertLegalInformationUseCase(
	userId: string,
	firstName: string,
	lastName: string,
	birthPlace: string | null,
	birthDate: Date | null,
) {
	const res = await prisma.userLegalInformations.upsert({
		where: {
			userId,
		},
		update: {
			firstName,
			lastName,
			birthPlace,
			birthDate,
		},
		create: {
			userId,
			firstName,
			lastName,
			birthPlace,
			birthDate,
		},
	});

	// if the firstname and lastname are set, we can assume the user has completed the onboarding
	// and we can set the isOnboarded flag to true
	if (res.firstName && res.lastName) {
		await prisma.user.update({
			where: {
				id: userId,
			},
			data: {
				isOnboarded: true,
			},
		});
	}

	return {
		firstName: res.firstName,
		lastName: res.lastName,
		birthPlace: res.birthPlace,
		birthDate: res.birthDate,
		userId: res.userId,
	};
}
