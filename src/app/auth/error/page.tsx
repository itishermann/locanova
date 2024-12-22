/**
 * The following errors are passed as error query parameters to the default or overridden error page:
 *
 * Configuration: There is a problem with the server configuration. Check if your options are correct.
 * AccessDenied: Usually occurs, when you restricted access through the signIn callback, or redirect callback
 * Verification: Related to the Email provider. The token has expired or has already been used
 * Default: Catch all, will apply, if none of the above matched
 *
 * example: /auth/error?error=Configuration
 *
 * @see https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/lib/pages/error.tsx
 */
import {
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const signinErrors: Record<
	"Configuration" | "AccessDenied" | "Verification" | "default",
	string
> = {
	default: "Unable to sign in.",
	Configuration:
		"There is a problem with the server configuration. Check the server logs for more information.",
	AccessDenied: "You do not have permission to sign in.",
	Verification:
		"The sign in link is no longer valid. It may have been used already or it may have expired.",
};

export default async function AuthErrorPage({
	searchParams: sp,
}: {
	searchParams: Promise<{
		error?: "Configuration" | "AccessDenied" | "Verification";
	}>;
}) {
	const searchParams = await sp;
	return (
		<div className="text-center">
			<CardHeader className="text-center">
				<CardTitle className="text-xl">An error occured</CardTitle>
				<CardDescription>
					{signinErrors[searchParams.error ?? "default"]}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<a href="/auth/signin" className="underline underline-offset-4">
					back to sign in
				</a>
			</CardContent>
		</div>
	);
}
