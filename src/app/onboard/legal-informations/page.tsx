import OnboardLegalInformationsForm from "@/app/onboard/legal-informations/form";

export default async function OnboardLegalInformationsPage() {
	return (
		<div className="max-w-md w-full px-6 py-8 space-y-6">
			<div className="text-center space-y-2">
				<h1 className="text-3xl font-bold">
					First, let's get to know each other
				</h1>
				<p className="text-muted-foreground">
					Please enter your first and last name as it appears on your ID. These
					details will be used on your documents.
				</p>
			</div>
			<div className="space-y-4">
				<div className="grid gap-4">
					<OnboardLegalInformationsForm />
				</div>
			</div>
		</div>
	);
}
