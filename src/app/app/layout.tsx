import AuthGuardProvider from "@/providers/auth-guard.provider";
import type { PropsWithChildren } from "react";

export default function AppLayout({ children }: PropsWithChildren) {
	return <AuthGuardProvider>{children}</AuthGuardProvider>;
}
