import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Github, Zap } from "lucide-react";
import * as React from "react";
import {
	Button,
	Caption,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	Code,
	Heading,
	Input,
	Kbd,
	Marquee,
	Preloader,
	Section,
	Text,
} from "@/components";

export const Route = createFileRoute("/design-system")({
	component: DesignSystem,
});

function DesignSystem() {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

	return (
		<div className="min-h-screen bg-void">
			{/* Header */}
			<header className="border-b-2 border-light bg-concrete sticky top-0 z-50">
				<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
					<div className="flex items-center gap-3">
						<div className="w-8 h-8 bg-acid flex items-center justify-center">
							<Zap className="w-5 h-5 text-void" />
						</div>
						<Heading level={1} size="lg" variant="mono">
							Design System
						</Heading>
					</div>
					<nav className="flex items-center gap-4">
						<a
							href="https://github.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted hover:text-white transition-colors"
						>
							<Github className="w-5 h-5" />
						</a>
					</nav>
				</div>
			</header>

			<main className="max-w-7xl mx-auto px-6 py-8">
				{/* Typography Section */}
				<Section id="typography" size="lg" gridPattern>
					<Heading level={2} size="4xl" accent className="mb-8">
						Typography
					</Heading>
					<Text variant="muted" className="mb-6">
						A bold, brutalist typography system using Space Mono for headings
						and Work Sans for body text.
					</Text>

					<div className="grid gap-6 md:grid-cols-2">
						<Card>
							<CardHeader>
								<CardTitle>Headings</CardTitle>
								<CardDescription>
									Available in 9 sizes with mono and uppercase variants
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div>
									<Caption size="xs">Display (5xl)</Caption>
									<Heading level={1} size="5xl">
										Display Heading
									</Heading>
								</div>
								<div>
									<Caption size="xs">Hero (4xl)</Caption>
									<Heading level={2} size="4xl">
										Hero Title
									</Heading>
								</div>
								<div>
									<Caption size="xs">Section (3xl)</Caption>
									<Heading level={3} size="3xl">
										Section Title
									</Heading>
								</div>
								<div>
									<Caption size="xs">Subsection (2xl)</Caption>
									<Heading level={4} size="2xl">
										Subsection Title
									</Heading>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Text Variants</CardTitle>
								<CardDescription>
									Multiple text styles for different contexts
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div>
									<Text size="lg" bold>
										Bold Body Text
									</Text>
								</div>
								<div>
									<Text variant="muted">
										Muted text for secondary information
									</Text>
								</div>
								<div>
									<Text variant="dim">Dim text for tertiary content</Text>
								</div>
								<div>
									<Text variant="accent">Accent text for emphasis</Text>
								</div>
								<div className="flex gap-2 items-center">
									<Kbd size="sm">Ctrl</Kbd>
									<Kbd size="sm">K</Kbd>
									<Text size="sm">Keyboard shortcut</Text>
								</div>
								<div>
									<Code>const greeting = "Hello World";</Code>
								</div>
							</CardContent>
						</Card>
					</div>
				</Section>

				{/* Buttons Section */}
				<Section id="buttons" size="lg">
					<Heading level={2} size="3xl" className="mb-8">
						Buttons
					</Heading>
					<Text variant="muted" className="mb-6">
						Brutalist buttons with uppercase text, thick borders, and acid green
						hover states.
					</Text>

					<Card className="mb-6">
						<CardHeader>
							<CardTitle>Variants</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="flex flex-wrap gap-4">
								<Button variant="primary">Primary</Button>
								<Button variant="secondary">Secondary</Button>
								<Button variant="outline">Outline</Button>
								<Button variant="ghost">Ghost</Button>
							</div>
						</CardContent>
					</Card>

					<Card className="mb-6">
						<CardHeader>
							<CardTitle>Sizes</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="flex flex-wrap gap-4 items-center">
								<Button size="sm">Small</Button>
								<Button size="md">Medium</Button>
								<Button size="lg">Large</Button>
							</div>
						</CardContent>
					</Card>

					<Card className="mb-6">
						<CardHeader>
							<CardTitle>With Icons</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="flex flex-wrap gap-4">
								<Button startIcon={<ArrowRight className="w-4 h-4" />}>
									Get Started
								</Button>
								<Button
									variant="outline"
									endIcon={<ArrowRight className="w-4 h-4" />}
								>
									Learn More
								</Button>
								<Button loading>Loading...</Button>
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>States</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="flex flex-wrap gap-4">
								<Button>Default</Button>
								<Button disabled>Disabled</Button>
								<Button fullWidth>Full Width</Button>
							</div>
						</CardContent>
					</Card>
				</Section>

				{/* Inputs Section */}
				<Section id="inputs" size="lg" gridPattern>
					<Heading level={2} size="3xl" className="mb-8">
						Inputs
					</Heading>
					<Text variant="muted" className="mb-6">
						Accessible form inputs with validation states and icon support.
					</Text>

					<Card>
						<CardHeader>
							<CardTitle>Form Inputs</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="grid gap-6 md:grid-cols-2 max-w-2xl">
								<Input
									label="Email Address"
									placeholder="you@example.com"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									startIcon={<Zap className="w-4 h-4" />}
								/>
								<Input
									label="Password"
									type="password"
									placeholder="Enter password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									helperText="Must be at least 8 characters"
								/>
								<Input
									label="Error State"
									error
									errorText="This field is required"
									placeholder="Error input"
								/>
								<Input label="Disabled" disabled placeholder="Disabled input" />
							</div>
						</CardContent>
					</Card>
				</Section>

				{/* Cards Section */}
				<Section id="cards" size="lg">
					<Heading level={2} size="3xl" className="mb-8">
						Cards
					</Heading>
					<Text variant="muted" className="mb-6">
						Versatile card components with multiple variants and accent options.
					</Text>

					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						<Card hoverable>
							<CardHeader>
								<Caption size="xs">Default</Caption>
								<CardTitle>Hoverable Card</CardTitle>
								<CardDescription>
									This card has hover effects enabled
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Text variant="muted">
									Hover over this card to see the brutalist hover effect with
									translate and shadow.
								</Text>
							</CardContent>
							<CardFooter>
								<Button size="sm">Action</Button>
							</CardFooter>
						</Card>

						<Card variant="elevated">
							<CardHeader>
								<Caption size="xs">Elevated</Caption>
								<CardTitle>Elevated Card</CardTitle>
								<CardDescription>
									Card with brutal shadow effect
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Text variant="muted">
									Uses the brutal-shadow utility for depth without softness.
								</Text>
							</CardContent>
						</Card>

						<Card variant="outlined">
							<CardHeader>
								<Caption size="xs">Outlined</Caption>
								<CardTitle>Outlined Card</CardTitle>
								<CardDescription>
									Clean outlined style for minimal designs
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Text variant="muted">
									Perfect for overlay contexts where background shouldn't be too
									heavy.
								</Text>
							</CardContent>
						</Card>

						<Card accent="left">
							<CardHeader>
								<Caption size="xs">Accent</Caption>
								<CardTitle>Accent Card</CardTitle>
								<CardDescription>With left accent border</CardDescription>
							</CardHeader>
							<CardContent>
								<Text variant="muted">
									Accent borders draw attention to important content.
								</Text>
							</CardContent>
						</Card>

						<Card variant="glitch" clickable>
							<CardHeader>
								<Caption size="xs">Glitch</Caption>
								<CardTitle>Glitch Effect</CardTitle>
								<CardDescription>Animated glitch variant</CardDescription>
							</CardHeader>
							<CardContent>
								<Text variant="muted">
									Glitch effect for cyberpunk or tech-focused designs.
								</Text>
							</CardContent>
						</Card>
					</div>
				</Section>

				{/* Visual Components Section */}
				<Section id="visual" size="lg" gridPattern>
					<Heading level={2} size="3xl" className="mb-8">
						Visual Effects
					</Heading>
					<Text variant="muted" className="mb-6">
						Components for visual flair and engagement.
					</Text>

					<div className="grid gap-6 md:grid-cols-2">
						<Card>
							<CardHeader>
								<CardTitle>Preloader</CardTitle>
								<CardDescription>Animated loading indicator</CardDescription>
							</CardHeader>
							<CardContent className="flex gap-8">
								<Preloader size="sm" label="Loading" />
								<Preloader size="md" variant="electric" label="Loading" />
								<Preloader size="lg" variant="white" label="Loading" />
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Marquee</CardTitle>
								<CardDescription>
									Infinite scrolling text banner
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Marquee speed={30} repeat={2}>
									<Text variant="accent" bold className="text-xl">
										IMPORTANT ANNOUNCEMENT • NEW FEATURES AVAILABLE • CHECK IT
										OUT •
									</Text>
								</Marquee>
							</CardContent>
						</Card>
					</div>
				</Section>

				{/* Color Palette */}
				<Section id="colors" size="lg">
					<Heading level={2} size="3xl" className="mb-8">
						Color Palette
					</Heading>
					<Text variant="muted" className="mb-6">
						The brutalist color system built on high contrast and acid accents.
					</Text>

					<Card>
						<CardContent className="p-0">
							<div className="grid">
								{/* Backgrounds */}
								<div className="p-4 border-b border-light">
									<Caption size="xs" className="mb-3 block">
										Backgrounds
									</Caption>
									<div className="flex gap-2 flex-wrap">
										<div className="w-16 h-16 bg-void border border-light flex items-center justify-center">
											<span className="text-[10px] text-muted">Void</span>
										</div>
										<div className="w-16 h-16 bg-concrete border border-light flex items-center justify-center">
											<span className="text-[10px] text-muted">Concrete</span>
										</div>
										<div className="w-16 h-16 bg-dark border border-light flex items-center justify-center">
											<span className="text-[10px] text-muted">Dark</span>
										</div>
									</div>
								</div>

								{/* Accents */}
								<div className="p-4 border-b border-light">
									<Caption size="xs" className="mb-3 block">
										Accents
									</Caption>
									<div className="flex gap-2 flex-wrap">
										<div className="w-16 h-16 bg-acid flex items-center justify-center">
											<span className="text-[10px] text-void font-bold">
												Acid
											</span>
										</div>
										<div className="w-16 h-16 bg-electric flex items-center justify-center">
											<span className="text-[10px] text-void font-bold">
												Electric
											</span>
										</div>
										<div className="w-16 h-16 bg-neon flex items-center justify-center">
											<span className="text-[10px] text-void font-bold">
												Neon
											</span>
										</div>
									</div>
								</div>

								{/* Semantic */}
								<div className="p-4">
									<Caption size="xs" className="mb-3 block">
										Semantic
									</Caption>
									<div className="flex gap-2 flex-wrap">
										<div className="w-16 h-16 bg-success flex items-center justify-center">
											<span className="text-[10px] text-void font-bold">
												Success
											</span>
										</div>
										<div className="w-16 h-16 bg-warning flex items-center justify-center">
											<span className="text-[10px] text-void font-bold">
												Warning
											</span>
										</div>
										<div className="w-16 h-16 bg-error flex items-center justify-center">
											<span className="text-[10px] text-void font-bold">
												Error
											</span>
										</div>
										<div className="w-16 h-16 bg-info flex items-center justify-center">
											<span className="text-[10px] text-void font-bold">
												Info
											</span>
										</div>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</Section>
			</main>

			{/* Footer */}
			<footer className="border-t-2 border-light bg-concrete py-8 mt-16">
				<div className="max-w-7xl mx-auto px-6 text-center">
					<Text variant="muted" size="sm">
						Built with the Brutalist Design System
					</Text>
				</div>
			</footer>
		</div>
	);
}

export default DesignSystem;
