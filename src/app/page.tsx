import Image from 'next/image';

export default function Home() {
	return (
		<>
			<header className="flex h-[50%] w-full flex-col items-center justify-center gap-10 bg-secondary">
				<Image
					alt="IT Crowd Logo"
					height={74}
					priority
					src="/it-crowd.svg"
					width={360}
				/>
				<h1 className="text-2xl font-bold text-primary-300">
					Next.js + Tailwind Starter
				</h1>
			</header>
			<main className="flex h-[50%] w-full flex-col items-center justify-center gap-10 bg-secondary text-slate-100">
				<p>
					Please checkout the <strong>README</strong> before starting.
				</p>
				<p>Happy coding! 🚀</p>
			</main>
		</>
	);
}
