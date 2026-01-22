import {
	type ColumnDef,
	type ColumnFiltersState,
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	type OnChangeFn,
	type PaginationState,
	type SortingState,
	useReactTable,
} from "@tanstack/react-table";
import * as React from "react";
import { Button } from "@/components";
import { cn } from "@/lib/cn";

export interface DataTableProps<TData> {
	data: TData[];
	columns: ColumnDef<TData>[];
	sorting?: SortingState;
	onSortingChange?: OnChangeFn<SortingState>;
	columnFilters?: ColumnFiltersState;
	onColumnFiltersChange?: OnChangeFn<ColumnFiltersState>;
	pagination?: PaginationState;
	onPaginationChange?: OnChangeFn<PaginationState>;
	className?: string;
}

export function DataTable<TData>({
	data,
	columns,
	sorting,
	onSortingChange,
	columnFilters,
	onColumnFiltersChange,
	pagination,
	onPaginationChange,
	className,
}: DataTableProps<TData>) {
	const [paginationState, setPaginationState] = React.useState<PaginationState>(
		pagination ?? { pageIndex: 0, pageSize: 10 },
	);

	const table = useReactTable({
		data,
		columns,
		state: {
			sorting,
			columnFilters,
			pagination: paginationState,
		},
		onSortingChange,
		onColumnFiltersChange,
		onPaginationChange: (newPagination) => {
			setPaginationState(newPagination);
			onPaginationChange?.(newPagination);
		},
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
	});

	return (
		<div className={cn("space-y-4", className)}>
			<div className="border-2 border-light bg-concrete">
				<table className="w-full">
					<thead>
						{table.getHeaderGroups().map((headerGroup) => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<th
										key={header.id}
										className={cn(
											"p-4 text-left font-mono font-bold uppercase tracking-wider text-white border-b-2 border-light",
											header.column.getCanSort() &&
												"cursor-pointer hover:bg-light/50 transition-colors select-none",
										)}
										onClick={header.column.getToggleSortingHandler()}
									>
										<div className="flex items-center gap-2">
											{flexRender(
												header.column.columnDef.header,
												header.getContext(),
											)}
											{header.column.getIsSorted() === "asc" && <span>↑</span>}
											{header.column.getIsSorted() === "desc" && <span>↓</span>}
										</div>
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody>
						{table.getRowModel().rows.map((row) => (
							<tr
								key={row.id}
								className="border-b border-light last:border-b-0 hover:bg-light/20 transition-colors"
							>
								{row.getVisibleCells().map((cell) => (
									<td
										key={cell.id}
										className="p-4 text-white font-mono text-sm"
									>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<Button
						size="sm"
						variant="outline"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						Previous
					</Button>
					<Button
						size="sm"
						variant="outline"
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
					>
						Next
					</Button>
				</div>
				<span className="font-mono text-sm text-muted">
					Page {table.getState().pagination.pageIndex + 1} of{" "}
					{table.getPageCount()}
				</span>
			</div>

			<div className="flex items-center gap-2">
				<select
					value={table.getState().pagination.pageSize}
					onChange={(e) => table.setPageSize(Number(e.target.value))}
					className="p-2 border-2 border-light bg-concrete text-white font-mono text-sm focus:outline-none focus:border-minimax-pink"
				>
					{[10, 20, 30, 40, 50].map((pageSize) => (
						<option key={pageSize} value={pageSize}>
							Show {pageSize}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}

export { createColumnHelper };
