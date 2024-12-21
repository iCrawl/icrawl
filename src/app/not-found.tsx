import Link from "next/link";

export default async function NotFound() {
	return (
		<div className="min-h-screen">
			<div className="mx-auto flex min-h-screen max-w-lg flex-col place-content-center place-items-center gap-8 px-8 py-16 lg:px-6 lg:py-0">
				<h1 className="text-[9rem] font-black leading-none md:text-[12rem]">404</h1>
				<h2 className="text-[2rem] md:text-[3rem]">Not found.</h2>
				<Link href="/">Take me back</Link>
			</div>
		</div>
	);
}
