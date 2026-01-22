import { Toast } from "@base-ui/react/toast";
import { motion } from "motion/react";
import { cn } from "@/lib/cn";

export { Toast };

export interface ToastItemProps {
	toast: Toast.Root.ToastObject;
	className?: string;
}

const toastStyles = {
	base: "flex flex-col p-5 border-2 bg-surface w-[360px] relative overflow-hidden animate-toast-enter",
	variants: {
		success: "border-success",
		error: "border-error",
		info: "border-info",
		warning: "border-warning",
		default: "border-primary",
	},
};

const progressStyles = {
	base: "h-0.5",
	variants: {
		success: "bg-success",
		error: "bg-error",
		info: "bg-info",
		warning: "bg-warning",
		default: "bg-primary",
	},
};

const titleStyles = {
	variants: {
		success: "text-success",
		error: "text-error",
		info: "text-info",
		warning: "text-warning",
		default: "text-primary",
	},
};

function ToastItemComponent({
	toast,
	duration,
}: {
	toast: Toast.Root.ToastObject;
	duration: number;
}) {
	const toastType =
		(toast.type as keyof typeof toastStyles.variants) || "default";
	const toastStyle =
		toastStyles.variants[toastType] || toastStyles.variants.default;
	const progressStyle =
		progressStyles.variants[toastType] || progressStyles.variants.default;
	const titleStyle =
		titleStyles.variants[toastType] || titleStyles.variants.default;

	return (
		<Toast.Root toast={toast} className={cn(toastStyles.base, toastStyle)}>
			<div className="flex items-start justify-between gap-3">
				<div className="flex-1">
					{toast.title && (
						<Toast.Title
							className={cn(
								"font-mono font-bold uppercase tracking-wider text-sm",
								titleStyle,
							)}
						>
							{toast.title}
						</Toast.Title>
					)}
					{toast.description && (
						<Toast.Description className="font-mono text-muted text-xs mt-1">
							{toast.description}
						</Toast.Description>
					)}
				</div>
				<Toast.Close
					className={cn(
						"flex-shrink-0 h-6 w-6 flex items-center justify-center",
						"border border-light bg-transparent text-muted",
						"font-mono text-xs font-bold hover:bg-primary hover:text-white hover:border-primary",
						"transition-colors cursor-pointer",
					)}
					aria-label="Close"
				>
					X
				</Toast.Close>
			</div>
			<div className="h-0.5 bg-light/20 mt-3">
				<motion.div
					className={cn("h-full", progressStyle)}
					initial={{ width: "100%" }}
					animate={{ width: "0%" }}
					transition={{ duration: duration / 1000, ease: "linear" }}
				/>
			</div>
		</Toast.Root>
	);
}

function Toasts({ duration }: { duration: number }) {
	const { toasts } = Toast.useToastManager();

	return (
		<>
			{toasts.map((toast) => (
				<ToastItemComponent key={toast.id} toast={toast} duration={duration} />
			))}
		</>
	);
}

export function ToastProvider({
	children,
	timeout = 5000,
}: {
	children: React.ReactNode;
	timeout?: number;
}) {
	return (
		<Toast.Provider timeout={timeout}>
			{children}
			<Toast.Portal>
				<Toast.Viewport
					className={cn(
						"fixed top-4 right-4 z-[100]",
						"flex flex-col gap-3",
						"w-[360px] max-w-[calc(100vw-2rem)]",
						"outline-none pointer-events-auto",
					)}
				>
					<Toasts duration={timeout} />
				</Toast.Viewport>
			</Toast.Portal>
		</Toast.Provider>
	);
}

export function useToastManager() {
	return Toast.useToastManager();
}

export function createToastManager() {
	return Toast.createToastManager();
}
