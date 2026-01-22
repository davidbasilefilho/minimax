import { createFileRoute } from "@tanstack/react-router";
import { Heading, Section, Text } from "@/components";

export const Route = createFileRoute("/")({
	component: HomePage,
});

function HomePage() {
	return (
		<Section
			size="full"
			className="min-h-screen flex flex-col items-center justify-center bg-void"
		>
			<div className="text-center max-w-2xl px-6">
				<Heading level={1} size="5xl" variant="mono" accent className="mb-6">
					MINIMAX DEMO
				</Heading>
				<Text variant="muted" size="lg" className="mb-8">
					A TanStack React Router application with a custom brutalist design
					system.
				</Text>
				<Text
					variant="accent"
					bold
					size="sm"
					className="font-mono uppercase tracking-widest"
				>
					React 19.2 • TanStack Router • Tailwind CSS v4
				</Text>
			</div>
		</Section>
	);
}

export default HomePage;
