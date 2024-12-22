import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		DATABASE_URL: z.string().url(),
		AUTH_SECRET: z.string(),
		EMAIL_SERVER: z.string().url("Invalid email secret"),
		EMAIL_FROM: z.string().email(),
		NODE_ENV: z
			.enum(["staging", "development", "production", "test"])
			.default("development"),
	},
	client: {
		NEXT_PUBLIC_APP_URL: z.string().url(),
	},
	runtimeEnv: {
		DATABASE_URL: process.env.DATABASE_URL,
		NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
		AUTH_SECRET: process.env.AUTH_SECRET,
		EMAIL_SERVER: process.env.EMAIL_SERVER,
		EMAIL_FROM: process.env.EMAIL_FROM,
		NODE_ENV: process.env.NODE_ENV,
	},
});
