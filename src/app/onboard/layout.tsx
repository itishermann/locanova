import { ColorModeToggle } from "@/components/color-mode-toggle";
import UnauthorizedPage from "@/components/container/UnauthorizedPage";
import { auth } from "@/lib/shared/infrastructure/auth";
import { prisma } from "@/lib/shared/infrastructure/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";
import type { PropsWithChildren } from "react";

export default async function OnboardLayout({ children }: PropsWithChildren) {
	const session = await auth();
	if (!session) return <UnauthorizedPage />;
	const userId = session.user?.id;
	if (!userId) return <UnauthorizedPage />;
	const user = await prisma.user.findUnique({ where: { id: userId } });
	if (!user) return <UnauthorizedPage />;
	if (user.isOnboarded) redirect("/app");
	return (
		<div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
			<main className="flex-1 flex flex-col items-center justify-center px-4 md:px-6">
				{children}
			</main>
			<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
				<p className="text-xs text-muted-foreground text-center">
					&copy; 2024 LocaNova, A free and{" "}
					<a href="https://github.com/itishermann/locanova">open-source</a>
					&nbsp;project built with ❤
				</p>
				<nav className="sm:ml-auto flex gap-4 sm:gap-6">
					<ColorModeToggle>
						<p className="text-xs hover:underline underline-offset-4">
							Toggle Theme
						</p>
					</ColorModeToggle>
					<Link
						href="/legal/terms-of-service"
						className="text-xs hover:underline underline-offset-4"
						prefetch={false}
					>
						Terms of Service
					</Link>
					<Link
						href="/legal/privacy-policy"
						className="text-xs hover:underline underline-offset-4"
						prefetch={false}
					>
						Privacy Policy
					</Link>
				</nav>
			</footer>
		</div>
	);
}
