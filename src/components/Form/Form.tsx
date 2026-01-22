import { Button } from "@base-ui/react/button";
import { Field } from "@base-ui/react/field";
import { Select } from "@base-ui/react/select";
import { createFormHookContexts, useForm } from "@tanstack/react-form";
import { motion } from "motion/react";
import type * as React from "react";
import { cn } from "@/lib/cn";

const { formContext, useFormContext } = createFormHookContexts();

export function Form({
	schema,
	defaultValues,
	onSubmit,
	children,
	className,
}: {
	schema?: { assert: (value: unknown) => void };
	defaultValues: Record<string, unknown>;
	onSubmit: (values: Record<string, unknown>) => void | Promise<void>;
	children: React.ReactNode;
	className?: string;
}) {
	const form = useForm({
		defaultValues,
		onSubmit: async ({ value }) => {
			schema?.assert(value);
			await onSubmit(value);
		},
	});

	return (
		<formContext.Provider value={form}>
			<form
				className={cn("flex flex-col gap-5", className)}
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					form.handleSubmit();
				}}
			>
				{children}
				<form.Subscribe
					selector={(state) => [state.canSubmit, state.isSubmitting]}
					children={([canSubmit, isSubmitting]) => (
						<Button
							type="submit"
							disabled={!canSubmit || isSubmitting}
							className={cn(
								"h-11 px-6 font-mono font-bold uppercase tracking-wider text-sm",
								"bg-primary text-white border-2 border-primary",
								"hover:bg-white hover:text-primary hover:border-primary",
								"disabled:opacity-50 disabled:cursor-not-allowed",
								"transition-all duration-200",
							)}
						>
							{isSubmitting ? "Processing..." : "Submit"}
						</Button>
					)}
				/>
			</form>
		</formContext.Provider>
	);
}

export function FormField({
	name,
	label,
	placeholder,
	required,
	type = "text",
	className,
}: {
	name: string;
	label?: string;
	placeholder?: string;
	required?: boolean;
	type?: string;
	className?: string;
}) {
	const form = useFormContext();

	return (
		<form.Field
			name={name}
			children={(field) => (
				<Field.Root
					className={cn("flex flex-col gap-2", className)}
					invalid={!field.state.meta.isValid && field.state.meta.isTouched}
				>
					{label && (
						<Field.Label className="font-mono text-sm font-bold uppercase tracking-wider text-muted">
							{label} {required && "*"}
						</Field.Label>
					)}
					<Field.Control
						type={type}
						placeholder={placeholder}
						required={required}
						className={cn(
							"w-full font-mono bg-surface text-white border-2 border-light p-3 text-sm",
							"focus:outline-none focus:border-primary focus:ring-0",
							"placeholder:text-dim",
							"transition-colors duration-200",
						)}
						value={field.state.value}
						onValueChange={field.handleChange}
						onBlur={field.handleBlur}
					/>
					<Field.Error className="font-mono text-xs text-error" />
				</Field.Root>
			)}
		/>
	);
}

export function FormSelect({
	name,
	label,
	options,
	required,
	className,
	onChange,
}: {
	name: string;
	label?: string;
	options: { value: string; label: string }[];
	required?: boolean;
	className?: string;
	onChange?: (value: string) => void;
}) {
	const form = useFormContext();

	return (
		<form.Field
			name={name}
			children={(field) => (
				<Field.Root
					className={cn("flex flex-col gap-2", className)}
					invalid={!field.state.meta.isValid && field.state.meta.isTouched}
				>
					{label && (
						<Field.Label className="font-mono text-sm font-bold uppercase tracking-wider text-muted">
							{label} {required && "*"}
						</Field.Label>
					)}
					<Select.Root
						value={field.state.value}
						onValueChange={(value) => {
							if (value !== null) {
								field.handleChange(value);
								onChange?.(value);
							}
						}}
					>
						<Select.Trigger
							className={cn(
								"flex h-11 min-w-40 items-center justify-between gap-3",
								"bg-surface border-2 border-light px-3 py-2 text-sm text-white font-mono",
								"focus:outline-none focus:border-primary focus:ring-0",
								"data-[popup-open]:bg-primary data-[popup-open]:text-white",
								"transition-colors duration-200",
							)}
						>
							<Select.Value placeholder="Select option" />
							<Select.Icon className="flex text-primary">
								<ChevronIcon />
							</Select.Icon>
						</Select.Trigger>
						<Select.Portal>
							<Select.Positioner className="outline-none z-50" sideOffset={4}>
								<motion.div
									initial={{ opacity: 0, scale: 0.95, y: -10 }}
									animate={{ opacity: 1, scale: 1, y: 0 }}
									exit={{ opacity: 0, scale: 0.95, y: -10 }}
									transition={{ duration: 0.15, ease: "easeOut" }}
								>
									<Select.Popup
										className={cn(
											"origin-top-left bg-surface border-2 border-light p-0",
											"max-h-[200px] overflow-y-auto",
											"brutal-shadow",
										)}
									>
										{options.map((option, index) => (
											<motion.div
												key={option.value}
												initial={{ opacity: 0, x: -10 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: index * 0.05, duration: 0.15 }}
											>
												<Select.Item
													value={option.value}
													className={cn(
														"grid grid-cols-[1.25rem_1fr] items-center gap-2 px-3 py-2 text-sm text-white font-mono",
														"cursor-default select-none outline-none",
														"data-[highlighted]:bg-primary data-[highlighted]:text-white",
														"data-[selected]:bg-primary data-[selected]:text-white",
													)}
												>
													<Select.ItemIndicator className="col-start-1 flex items-center justify-center">
														<CheckIcon />
													</Select.ItemIndicator>
													<Select.ItemText className="col-start-2">
														{option.label}
													</Select.ItemText>
												</Select.Item>
											</motion.div>
										))}
									</Select.Popup>
								</motion.div>
							</Select.Positioner>
						</Select.Portal>
					</Select.Root>
					<Field.Error className="font-mono text-xs text-error" />
				</Field.Root>
			)}
		/>
	);
}

function ChevronIcon() {
	return (
		<svg
			width="12"
			height="12"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Chevron</title>
			<path
				d="M4 6L8 10L12 6"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="square"
				strokeLinejoin="miter"
			/>
		</svg>
	);
}

function CheckIcon() {
	return (
		<svg
			width="12"
			height="12"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Check</title>
			<path
				d="M13 4L6 11L3 8"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="square"
				strokeLinejoin="miter"
			/>
		</svg>
	);
}
