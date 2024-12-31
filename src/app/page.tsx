import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Github } from "lucide-react";

export default function ComingSoonPage() {
	return (
		<div className="min-h-screen flex items-center justify-center p-4">
			<Card className="w-full max-w-md">
				<CardHeader className="text-center">
					<div className="w-20 h-20 mx-auto mb-4 bg-blue-500 rounded-full flex items-center justify-center">
						<span className="text-3xl font-bold text-white">LN</span>
					</div>
					<CardTitle className="text-3xl font-bold text-blue-800">
						LocaNova
					</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-center  mb-6">
						La plateforme de gestion locative open source arrive bientôt. Soyez
						parmi les premiers à être informés !
					</p>
					<form className="flex space-x-2">
						<Input
							type="email"
							placeholder="Votre adresse e-mail"
							className="flex-grow"
						/>
						<Button type="submit">S'inscrire</Button>
					</form>
				</CardContent>
				<CardFooter className="justify-center space-x-4">
					<a
						href="https://github.com/itishermann/locanova"
						className="text-gray-600 hover:text-blue-600"
					>
						<Github size={24} />
					</a>
					{/*<a href="#" className="text-gray-600 hover:text-blue-400">*/}
					{/*	<Twitter size={24} />*/}
					{/*</a>*/}
					{/*<a href="#" className="text-gray-600 hover:text-blue-800">*/}
					{/*	<Facebook size={24} />*/}
					{/*</a>*/}
				</CardFooter>
			</Card>
		</div>
	);
}
