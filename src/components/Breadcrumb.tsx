import {
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
	Breadcrumb as ShadcnBreadcrumb,
} from "@/components/ui/breadcrumb";

interface Page {
	href: string;
	name: string;
}

export function Breadcrumb({ pages }: { pages: Page[] }) {
	const prevItems = pages.slice(0, pages.length - 1);
	const lastItem = pages[pages.length - 1];
	return (
		<ShadcnBreadcrumb>
			<BreadcrumbList>
				{prevItems.map((page) => (
					<BreadcrumbItem key={page.href}>
						<BreadcrumbLink href={page.href}>{page.name}</BreadcrumbLink>
						<BreadcrumbSeparator />
					</BreadcrumbItem>
				))}
				<BreadcrumbItem>
					<BreadcrumbPage>{lastItem.name}</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</ShadcnBreadcrumb>
	);
}
