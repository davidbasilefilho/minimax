import { createFileRoute } from "@tanstack/react-router";
import type { ColumnDef } from "@tanstack/react-table";
import {
	ArrowRight,
	ArrowUpRight,
	Calendar,
	Github,
	Mail,
	Trash2,
	Zap,
} from "lucide-react";
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
	DataTable,
	Form,
	FormField,
	FormSelect,
	Heading,
	Input,
	Kbd,
	Marquee,
	Preloader,
	Section,
	Text,
	useToastManager,
} from "@/components";

export const Route = createFileRoute("/design-system")({
	component: DesignSystem,
});

interface User {
	id: number;
	name: string;
	email: string;
	role: string;
	status: "active" | "inactive";
}

const userColumns: ColumnDef<User>[] = [
	{
		accessorKey: "id",
		header: "ID",
		cell: (info) => (
			<Text className="font-mono">#{info.getValue() as number}</Text>
		),
	},
	{
		accessorKey: "name",
		header: "Name",
		cell: (info) => <Text bold>{info.getValue() as string}</Text>,
	},
	{
		accessorKey: "email",
		header: "Email",
		cell: (info) => (
			<Text variant="muted" size="sm">
				{info.getValue() as string}
			</Text>
		),
	},
	{
		accessorKey: "role",
		header: "Role",
		cell: (info) => <Kbd size="sm">{info.getValue() as string}</Kbd>,
	},
	{
		accessorKey: "status",
		header: "Status",
		cell: (info) => {
			const status = info.getValue() as string;
			return (
				<Text
					size="sm"
					className={status === "active" ? "text-success" : "text-dim"}
				>
					{status.toUpperCase()}
				</Text>
			);
		},
	},
];

const sampleUsers: User[] = [
	{
		id: 1,
		name: "Alex Chen",
		email: "alex@minimax.io",
		role: "Admin",
		status: "active",
	},
	{
		id: 2,
		name: "Sarah Miller",
		email: "sarah@minimax.io",
		role: "Editor",
		status: "active",
	},
	{
		id: 3,
		name: "James Wilson",
		email: "james@minimax.io",
		role: "Viewer",
		status: "inactive",
	},
	{
		id: 4,
		name: "Emily Davis",
		email: "emily@minimax.io",
		role: "Admin",
		status: "active",
	},
	{
		id: 5,
		name: "Michael Brown",
		email: "michael@minimax.io",
		role: "Editor",
		status: "active",
	},
];

function ToastDemo() {
	const toastManager = useToastManager();

	const showToast = (type: "success" | "error" | "info" | "warning") => {
		const config = {
			success: {
				type: "success",
				title: "Operation Successful",
				description: "Your changes have been saved to the system.",
			},
			error: {
				type: "error",
				title: "Error Detected",
				description: "Something went wrong. Please try again.",
			},
			info: {
				type: "info",
				title: "System Update",
				description: "New features are now available.",
			},
			warning: {
				type: "warning",
				title: "Warning",
				description: "Please review before proceeding.",
			},
		};

		toastManager.add(config[type]);
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Toast Notifications</CardTitle>
				<CardDescription>
					Non-blocking notifications with progress indicators
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex flex-wrap gap-3">
					<Button variant="primary" onClick={() => showToast("success")}>
						Success
					</Button>
					<Button variant="secondary" onClick={() => showToast("error")}>
						Error
					</Button>
					<Button variant="outline" onClick={() => showToast("info")}>
						Info
					</Button>
					<Button variant="ghost" onClick={() => showToast("warning")}>
						Warning
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}

function DesignSystem() {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

	const typographyId = React.useId();
	const buttonsId = React.useId();
	const inputsId = React.useId();
	const cardsId = React.useId();
	const formsId = React.useId();
	const tablesId = React.useId();
	const toastsId = React.useId();
	const visualId = React.useId();
	const colorsId = React.useId();

	const handleFormSubmit = async (values: Record<string, unknown>) => {
		console.log("Form submitted:", values);
		await new Promise((resolve) => setTimeout(resolve, 1000));
	};

	return (
		<div className="min-h-screen bg-void scanlines">
			<header className="border-b-2 border-light bg-surface sticky top-0 z-50">
				<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
					<div className="flex items-center gap-3">
						<div className="w-10 h-10 bg-primary flex items-center justify-center">
							<Zap className="w-6 h-6 text-white" />
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
							className="text-muted hover:text-primary transition-colors"
						>
							<Github className="w-5 h-5" />
						</a>
					</nav>
				</div>
			</header>

			<main className="max-w-7xl mx-auto px-6 py-8">
				<Section id={typographyId} size="lg" gridPattern>
					<Heading level={2} size="4xl" className="mb-8">
						Typography
					</Heading>
					<Text variant="muted" className="mb-6 max-w-2xl">
						Distinctive type system using Space Grotesk for headings and
						monospace for technical text. Bold, brutalist, and unmistakably
						modern.
					</Text>

					<div className="grid gap-6 md:grid-cols-2">
						<Card>
							<CardHeader>
								<CardTitle>Headings</CardTitle>
								<CardDescription>
									Space Grotesk in multiple weights
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
								<CardTitle>Text Styles</CardTitle>
								<CardDescription>
									Monospace for all text elements
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
									<Text variant="dim">Dim text for tertiary</Text>
								</div>
								<div>
									<Text variant="accent" className="text-primary">
										Accent text for emphasis
									</Text>
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

				<Section id={buttonsId} size="lg">
					<Heading level={2} size="3xl" className="mb-8">
						Buttons
					</Heading>
					<Text variant="muted" className="mb-6 max-w-2xl">
						High-contrast buttons with sharp edges and bold hover states. No
						rounded corners, no subtlety.
					</Text>

					<Card className="mb-6">
						<CardHeader>
							<CardTitle>Variants</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="flex flex-wrap gap-3">
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
							<div className="flex flex-wrap gap-3 items-center">
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
							<div className="flex flex-wrap gap-3">
								<Button startIcon={<ArrowRight className="w-4 h-4" />}>
									Get Started
								</Button>
								<Button
									variant="outline"
									endIcon={<ArrowRight className="w-4 h-4" />}
								>
									Learn More
								</Button>
								<Button
									variant="secondary"
									endIcon={<ArrowUpRight className="w-4 h-4" />}
								>
									View Docs
								</Button>
								<Button loading>Processing...</Button>
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>States</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="flex flex-wrap gap-3">
								<Button>Default</Button>
								<Button disabled>Disabled</Button>
								<Button fullWidth>Full Width Button</Button>
							</div>
						</CardContent>
					</Card>
				</Section>

				<Section id={inputsId} size="lg" gridPattern>
					<Heading level={2} size="3xl" className="mb-8">
						Inputs
					</Heading>
					<Text variant="muted" className="mb-6 max-w-2xl">
						Sharp-edged inputs with bold focus states. No border radius, no soft
						shadows.
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
									startIcon={<Mail className="w-4 h-4" />}
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

				<Section id={formsId} size="lg">
					<Heading level={2} size="3xl" className="mb-8">
						Forms
					</Heading>
					<Text variant="muted" className="mb-6 max-w-2xl">
						TanStack Form integration with Base UI components. Full validation
						and state management.
					</Text>

					<div className="grid gap-6 md:grid-cols-2">
						<Card>
							<CardHeader>
								<CardTitle>Contact Form</CardTitle>
								<CardDescription>Complete form with validation</CardDescription>
							</CardHeader>
							<CardContent>
								<Form
									defaultValues={{
										email: "",
										password: "",
										role: "user",
									}}
									onSubmit={handleFormSubmit}
								>
									<FormField
										name="email"
										label="Email"
										placeholder="you@example.com"
										type="email"
										required
									/>
									<FormField
										name="password"
										label="Password"
										placeholder="Enter password"
										type="password"
										required
									/>
									<FormSelect
										name="role"
										label="Role"
										options={[
											{
												value: "user",
												label: "User",
											},
											{
												value: "admin",
												label: "Admin",
											},
											{
												value: "editor",
												label: "Editor",
											},
										]}
										required
									/>
								</Form>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Inline Form</CardTitle>
								<CardDescription>Compact layout for settings</CardDescription>
							</CardHeader>
							<CardContent>
								<Form
									defaultValues={{
										newsletter: "weekly",
									}}
									onSubmit={async (values) => {
										console.log(values);
									}}
								>
									<div className="space-y-5">
										<FormSelect
											name="newsletter"
											label="Newsletter"
											options={[
												{
													value: "daily",
													label: "Daily Digest",
												},
												{
													value: "weekly",
													label: "Weekly Roundup",
												},
												{
													value: "monthly",
													label: "Monthly Update",
												},
											]}
										/>
										<div className="flex gap-3 pt-2">
											<Button
												size="sm"
												variant="outline"
												startIcon={<Trash2 className="w-4 h-4" />}
											>
												Delete
											</Button>
										</div>
									</div>
								</Form>
							</CardContent>
						</Card>
					</div>
				</Section>

				<Section id={tablesId} size="lg" gridPattern>
					<Heading level={2} size="3xl" className="mb-8">
						Data Table
					</Heading>
					<Text variant="muted" className="mb-6 max-w-2xl">
						TanStack Table with brutalist styling. Sharp grid lines, monospace
						data, clear hierarchy.
					</Text>

					<Card>
						<CardHeader>
							<CardTitle>User Management</CardTitle>
							<CardDescription>
								Sortable user data with status indicators
							</CardDescription>
						</CardHeader>
						<CardContent>
							<DataTable
								columns={userColumns}
								data={sampleUsers}
								sorting={[]}
							/>
						</CardContent>
					</Card>
				</Section>

				<Section id={toastsId} size="lg">
					<Heading level={2} size="3xl" className="mb-8">
						Toast Notifications
					</Heading>
					<Text variant="muted" className="mb-6 max-w-2xl">
						Non-blocking notifications with progress bars and brutalist styling.
					</Text>

					<ToastDemo />
				</Section>

				<Section id={cardsId} size="lg">
					<Heading level={2} size="3xl" className="mb-8">
						Cards
					</Heading>
					<Text variant="muted" className="mb-6 max-w-2xl">
						Versatile card components with multiple variants. From subtle to
						dramatic.
					</Text>

					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						<Card hoverable>
							<CardHeader>
								<Caption size="xs">Default</Caption>
								<CardTitle>Hoverable Card</CardTitle>
								<CardDescription>Translate and shadow on hover</CardDescription>
							</CardHeader>
							<CardContent>
								<Text variant="muted" size="sm">
									Hover to see the brutalist hover effect.
								</Text>
							</CardContent>
							<CardFooter>
								<Button size="sm">Action</Button>
							</CardFooter>
						</Card>

						<Card variant="elevated">
							<CardHeader>
								<Caption size="xs">Elevated</Caption>
								<CardTitle>Hard Shadow</CardTitle>
								<CardDescription>4px offset shadow, no blur</CardDescription>
							</CardHeader>
							<CardContent>
								<Text variant="muted" size="sm">
									Depth without softness.
								</Text>
							</CardContent>
						</Card>

						<Card variant="outlined">
							<CardHeader>
								<Caption size="xs">Outlined</Caption>
								<CardTitle>Minimal Card</CardTitle>
								<CardDescription>Clean white border on dark</CardDescription>
							</CardHeader>
							<CardContent>
								<Text variant="muted" size="sm">
									Perfect for overlay contexts.
								</Text>
							</CardContent>
						</Card>

						<Card accent="left">
							<CardHeader>
								<Caption size="xs">Accent</Caption>
								<CardTitle>Left Accent</CardTitle>
								<CardDescription>Vertical accent border</CardDescription>
							</CardHeader>
							<CardContent>
								<Text variant="muted" size="sm">
									Draws attention to content.
								</Text>
							</CardContent>
						</Card>

						<Card variant="glitch" clickable>
							<CardHeader>
								<Caption size="xs" className="text-primary">
									Glitch
								</Caption>
								<CardTitle>RGB Shift Effect</CardTitle>
								<CardDescription>Cyberpunk glitch animation</CardDescription>
							</CardHeader>
							<CardContent>
								<Text variant="muted" size="sm">
									Animated RGB split on hover.
								</Text>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<Caption size="xs">Interactive</Caption>
								<CardTitle>Action Card</CardTitle>
								<CardDescription>With action buttons</CardDescription>
							</CardHeader>
							<CardContent>
								<Text variant="muted" size="sm" className="mb-4">
									Combine cards with buttons.
								</Text>
								<div className="flex gap-2">
									<Button
										size="sm"
										startIcon={<Calendar className="w-4 h-4" />}
									>
										Schedule
									</Button>
									<Button size="sm" variant="outline">
										Cancel
									</Button>
								</div>
							</CardContent>
						</Card>
					</div>
				</Section>

				<Section id={visualId} size="lg" gridPattern>
					<Heading level={2} size="3xl" className="mb-8">
						Visual Effects
					</Heading>
					<Text variant="muted" className="mb-6 max-w-2xl">
						Animated components that add character without softness.
					</Text>

					<div className="grid gap-6 md:grid-cols-2">
						<Card>
							<CardHeader>
								<CardTitle>Preloader</CardTitle>
								<CardDescription>Animated loading states</CardDescription>
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
								<CardDescription>Infinite scrolling text</CardDescription>
							</CardHeader>
							<CardContent>
								<Marquee speed={25} repeat={2}>
									<Text variant="accent" bold className="text-lg">
										IMPORTANT ANNOUNCEMENT • NEW FEATURES AVAILABLE • CHECK IT
										OUT •
									</Text>
								</Marquee>
							</CardContent>
						</Card>
					</div>
				</Section>

				<Section id={colorsId} size="lg">
					<Heading level={2} size="3xl" className="mb-8">
						Color Palette
					</Heading>
					<Text variant="muted" className="mb-6 max-w-2xl">
						High-contrast brutalist palette. Hot pink primary, electric
						secondary, acid accents.
					</Text>

					<Card>
						<CardContent className="p-0">
							<div className="grid">
								<div className="p-4 border-b-2 border-light">
									<Caption size="xs" className="mb-3 block">
										Backgrounds
									</Caption>
									<div className="flex gap-2 flex-wrap">
										<div className="w-16 h-16 bg-void border-2 border-light flex items-center justify-center">
											<span className="text-[10px] text-muted">Void</span>
										</div>
										<div className="w-16 h-16 bg-dark border-2 border-light flex items-center justify-center">
											<span className="text-[10px] text-muted">Dark</span>
										</div>
										<div className="w-16 h-16 bg-surface border-2 border-light flex items-center justify-center">
											<span className="text-[10px] text-muted">Surface</span>
										</div>
										<div className="w-16 h-16 bg-concrete border-2 border-light flex items-center justify-center">
											<span className="text-[10px] text-muted">Concrete</span>
										</div>
									</div>
								</div>

								<div className="p-4 border-b-2 border-light">
									<Caption size="xs" className="mb-3 block">
										Primary / Secondary
									</Caption>
									<div className="flex gap-2 flex-wrap">
										<div className="w-16 h-16 bg-primary flex items-center justify-center">
											<span className="text-[10px] text-white font-bold">
												Primary
											</span>
										</div>
										<div className="w-16 h-16 bg-secondary flex items-center justify-center">
											<span className="text-[10px] text-void font-bold">
												Secondary
											</span>
										</div>
									</div>
								</div>

								<div className="p-4 border-b-2 border-light">
									<Caption size="xs" className="mb-3 block">
										Accents
									</Caption>
									<div className="flex gap-2 flex-wrap">
										<div className="w-16 h-16 bg-acid flex items-center justify-center">
											<span className="text-[10px] text-void font-bold">
												Acid
											</span>
										</div>
										<div className="w-16 h-16 bg-neon flex items-center justify-center">
											<span className="text-[10px] text-white font-bold">
												Neon
											</span>
										</div>
										<div className="w-16 h-16 bg-amber flex items-center justify-center">
											<span className="text-[10px] text-void font-bold">
												Amber
											</span>
										</div>
									</div>
								</div>

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
											<span className="text-[10px] text-white font-bold">
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

			<footer className="border-t-2 border-light bg-surface py-8 mt-16">
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
