import { prisma } from "@/lib/shared/infrastructure/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
// import Apple from "next-auth/providers/apple";
// import Auth0 from "next-auth/providers/auth0";
// import Authentik from "next-auth/providers/authentik";
// import Cognito from "next-auth/providers/cognito";
// import Facebook from "next-auth/providers/facebook";
// import Google from "next-auth/providers/google";
// import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id";
import Nodemailer from "next-auth/providers/nodemailer";
// import Okta from "next-auth/providers/okta";

import type { Provider } from "next-auth/providers";
import { env } from "./env";

const providers: Provider[] = [
	Nodemailer({
		server: env.EMAIL_SERVER,
		from: env.EMAIL_FROM,
		name: "Email",
	}),
];

export const providerMap = providers
	.map((provider) => {
		if (typeof provider === "function") {
			const providerData = provider();
			return { id: providerData.id, name: providerData.name };
		}
		return { id: provider.id, name: provider.name };
	})
	.filter((provider) => !["nodemailer", "credentials"].includes(provider.id));

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers,
	adapter: PrismaAdapter(prisma),
	debug: env.NODE_ENV === "development",
	pages: {
		error: "/auth/error",
		verifyRequest: "/auth/verify-request",
		signOut: "/auth/signout",
		signIn: "/auth/signin",
		newUser: "/onboard",
	},
});
