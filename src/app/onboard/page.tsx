import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default async function OnboardPage() {
	return (
		<div className="max-w-md w-full px-6 py-8 space-y-6">
			<div className="text-center space-y-2">
				<h1 className="text-3xl font-bold">Welcome to LocaNova.</h1>
				<p className="text-muted-foreground">
					Let's get you set up and ready to use the app.
				</p>
			</div>
			<div className="space-y-4">
				<div className="grid gap-4">
					<div className="flex items-start gap-4">
						<Button type="submit" className="w-full" asChild>
							<Link href="/onboard/legal-informations">
								Continue
								<ChevronRight />
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
