import { appRouter } from "@/trpc/router";
import { renderTrpcPanel } from "@metamorph/trpc-panel";
import { NextResponse } from "next/server";

export async function GET() {
	return new NextResponse(
		renderTrpcPanel(appRouter, {
			url: "/api/trpc",
			transformer: "superjson",
		}),
		{
			status: 200,
			headers: [["Content-Type", "text/html"] as [string, string]],
		},
	);
}
