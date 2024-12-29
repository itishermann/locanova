import UnauthorizedPage from "@/components/container/UnauthorizedPage";
import { auth } from "@/lib/shared/infrastructure/auth";
import type { PropsWithChildren } from "react";

export default async function AuthGuardProvider({
	children,
}: PropsWithChildren) {
	const session = await auth();
	if (session) return children;
	return <UnauthorizedPage />;
}
