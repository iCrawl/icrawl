// import { Nav } from "~/components/Nav";
import { Discord, Github, Twitter, Instagram } from "@icons-pack/react-simple-icons";
import { Send } from "lucide-react";

export default function Page() {
	return (
		<div className="m-auto max-w-2xl min-h-screen flex flex-col place-content-center px-8 py-16 lg:px-6 lg:py-0">
			<main>
				<section>
					<h1 className="text-6xl font-bold leading-tight">
						Hey, I'm <span className="text-sky-500">Crawl</span>!
					</h1>
					<h2 className="text-2xl font-light">Software Developer</h2>
				</section>
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
						<Send />
					</a>
					<a
						aria-label="GitHub"
						href="https://github.com/iCrawl"
						rel="external noopener noreferrer"
						target="_blank"
						title="GitHub"
					>
						<Github />
					</a>
					<a
						aria-label="Discord"
						href="https://discord.gg/djs"
						rel="external noopener noreferrer"
						target="_blank"
						title="Discord"
					>
						<Discord />
					</a>
					<a
						aria-label="Twitter"
						href="https://twitter.com/iCrawlToGo"
						rel="external noopener noreferrer"
						target="_blank"
						title="Twitter"
					>
						<Twitter />
					</a>
					<a
						aria-label="Instagram"
						href="https://www.instagram.com/icrawltogo"
						rel="external noopener noreferrer"
						target="_blank"
						title="Instagram"
					>
						<Instagram />
					</a>
				</nav>
			</footer>
		</div>
	);
}
