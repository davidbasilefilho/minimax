import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with conflict resolution.
 * Wrapper around tailwind-merge for consistent class name handling.
 */
export function cn(...inputs: (string | undefined | null | false)[]): string {
	return twMerge(inputs);
}
