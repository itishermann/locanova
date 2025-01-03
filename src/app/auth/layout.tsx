import { Card } from "@/components/ui/card";
import { GalleryVerticalEnd } from "lucide-react";
import type { ReactNode } from "react";

export default function AuthLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
			<div className="flex w-full max-w-sm flex-col gap-6">
				<a href="/" className="flex items-center gap-2 self-center font-medium">
					<div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
						<GalleryVerticalEnd className="size-4" />
					</div>
					LocaNova
				</a>
				<div className={"flex flex-col gap-6"}>
					<Card>{children}</Card>
					<div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
						By continuing, you agree to our{" "}
						<a href="/legal/terms-of-service">Terms of Service</a> and{" "}
						<a href="legal/privacy-policy">Privacy Policy</a>.
					</div>
				</div>
			</div>
		</div>
	);
}
