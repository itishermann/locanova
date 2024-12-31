import type { Metadata } from "next";
import { Lato, Poppins } from "next/font/google";
import "./globals.css";
import { MainProvider } from "@/providers/main.provider";
import type { ReactNode } from "react";

const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-poppins",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const lato = Lato({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-lato",
	weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
	title: "LocaNova - Plateforme de Gestion Locative Moderne et Open Source",
	description:
		"Découvrez LocaNova, la solution de gestion locative intuitive et conforme aux lois françaises. Centralisez vos annonces, loyers, documents légaux, et suivez vos revenus fonciers en toute simplicité. Une plateforme open source, personnalisable et accessible depuis le web ou mobile, pensée pour les propriétaires et agences immobilières. Optimisez votre gestion locative avec LocaNova.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${lato.variable} ${poppins.variable} antialiased`}>
				<MainProvider>{children}</MainProvider>
			</body>
		</html>
	);
}
