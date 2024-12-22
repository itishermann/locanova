import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default async function VerifyRequestPage() {
	return (
		<div className="text-center">
			<CardHeader className="text-center">
				<CardTitle className="text-xl">Check your email</CardTitle>
				<CardDescription>
					A sign in link has been sent to your email address.
				</CardDescription>
			</CardHeader>
		</div>
	);
}
