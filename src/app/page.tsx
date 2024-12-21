import {
	SiDiscord as Discord,
	SiGithub as GitHub,
	SiX as Twitter,
	SiInstagram as Instagram,
} from "@icons-pack/react-simple-icons";
import { Send } from "lucide-react";
import { Lanyard } from "~/components/lanyard/Lanyard";

export default async function Page() {
	return (
		<div className="min-h-screen">
			<div className="mx-auto flex min-h-screen max-w-2xl flex-col place-content-center px-8 py-16 lg:px-6 lg:py-0">
				<main>
					<section>
						<h1 className="text-6xl font-bold leading-tight">
							Hey, I'm <span className="text-sky-500">Crawl</span>!
						</h1>
						<h2 className="text-2xl font-light">Software Developer</h2>
					</section>
					<Lanyard />
				</main>
				<footer>
					<nav className="mt-12 flex gap-4">
						<a
							aria-label="Email"
							href="mailto:buechler.noel@outlook.com"
							rel="external noopener noreferrer"
							target="_blank"
							title="Email"
						>
							<Send aria-hidden />
						</a>
						<a
							aria-label="GitHub"
							href="https://github.com/iCrawl"
							rel="external noopener noreferrer"
							target="_blank"
							title="GitHub"
						>
							<GitHub aria-hidden />
						</a>
						<a
							aria-label="Discord"
							href="https://discord.gg/djs"
							rel="external noopener noreferrer"
							target="_blank"
							title="Discord"
						>
							<Discord aria-hidden />
						</a>
						<a
							aria-label="Twitter"
							href="https://twitter.com/iCrawlToGo"
							rel="external noopener noreferrer"
							target="_blank"
							title="Twitter"
						>
							<Twitter aria-hidden />
						</a>
						<a
							aria-label="Instagram"
							href="https://www.instagram.com/icrawltogo"
							rel="external noopener noreferrer"
							target="_blank"
							title="Instagram"
						>
							<Instagram aria-hidden />
						</a>
					</nav>
				</footer>
			</div>
		</div>
	);
}
