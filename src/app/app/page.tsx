import { auth } from "@/lib/shared/infrastructure/auth";
import React from "react";

export default async function Dashboard() {
	const session = await auth();
	if (!session) return <div>Not authenticated</div>;
	return (
		<div>
			<h1>Dashboard</h1>
		</div>
	);
}
