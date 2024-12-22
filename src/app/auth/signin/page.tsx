import { Button } from "@/components/ui/button";
import {
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { providerMap, signIn } from "@/lib/shared/infrastructure/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export default async function SigninPage({
	searchParams: sp,
}: {
	searchParams: Promise<{ callbackUrl: string | undefined }> | undefined;
}) {
	const searchParams = await sp;
	const handleNodemailerSignin = async (formData: FormData) => {
		"use server";
		try {
			await signIn("nodemailer", {
				email: formData.get("email"),
				redirectTo: searchParams?.callbackUrl ?? "/app",
			});
		} catch (error) {
			if (error instanceof AuthError) {
				return redirect(`/auth/error?error=${error.type}`);
			}
			throw error;
		}
	};

	const handleProviderSignin = (providerId: string) => async () => {
		"use server";
		try {
			await signIn(providerId, {
				redirectTo: searchParams?.callbackUrl ?? "/app",
			});
		} catch (error) {
			// Signin can fail for a number of reasons, such as the user
			// not existing, or the user not having the correct role.
			// In some cases, you may want to redirect to a custom error
			if (error instanceof AuthError) {
				return redirect(`/auth/error?error=${error.type}`);
			}

			// Otherwise if a redirects happens Next.js can handle it
			// so you can just re-thrown the error and let Next.js handle it.
			// Docs:
			// https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
			throw error;
		}
	};

	return (
		<div>
			<CardHeader className="text-center">
				<CardTitle className="text-xl">Welcome</CardTitle>
				<CardDescription>Login to your account</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="grid gap-6">
					<div className="flex flex-col gap-4">
						{Object.values(providerMap).map((provider) => (
							<form
								key={provider.id}
								action={handleProviderSignin(provider.id)}
							>
								<Button variant="outline" className="w-full" type="submit">
									Sign in with {provider.name}
								</Button>
							</form>
						))}
					</div>
					{providerMap.length > 0 && (
						<div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
							<span className="relative z-10 bg-background px-2 text-muted-foreground">
								Or continue with
							</span>
						</div>
					)}
					<form className="grid gap-6" action={handleNodemailerSignin}>
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								name="email"
								placeholder="me@example.com"
								required
							/>
						</div>
						<Button type="submit" className="w-full">
							Send magic link
						</Button>
					</form>
				</div>
			</CardContent>
		</div>
	);
}
