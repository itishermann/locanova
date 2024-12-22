import { Button } from "@/components/ui/button";
import {
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { auth, signOut } from "@/lib/shared/infrastructure/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export default async function SignoutPage({
	searchParams: sp,
}: {
	searchParams: Promise<{ callbackUrl: string | undefined }> | undefined;
}) {
	const session = await auth();
	if (!session) {
		return redirect("/auth/signin");
	}
	const searchParams = await sp;
	const handleSignout = async () => {
		"use server";
		try {
			await signOut({ redirectTo: searchParams?.callbackUrl ?? "/" });
		} catch (error) {
			if (error instanceof AuthError) {
				return redirect(`/auth/error?error=${error.type}`);
			}
			throw error;
		}
	};

	return (
		<div>
			<CardHeader className="text-center">
				<CardTitle className="text-xl">Sign out</CardTitle>
				<CardDescription>Are you sure you want to sign out?</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="grid gap-6">
					<form className="grid gap-6" action={handleSignout}>
						<Button type="submit" className="w-full">
							Sign out
						</Button>
					</form>
				</div>
			</CardContent>
		</div>
	);
}
