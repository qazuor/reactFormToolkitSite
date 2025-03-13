import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import * as React from "react";
import { NavLink } from "react-router";

const examples: { title: string; href: string; description: string }[] = [
	{
		title: "Basic Form",
		href: "/examples/basic-form",
		description: "Basic form description",
	},
	{
		title: "Advanced Form",
		href: "/examples/advanced-form",
		description: "Advanced form description",
	},
	{
		title: "Async Validation",
		href: "/examples/async-validation",
		description: "Async validation form description",
	},
	{
		title: "Custom visual feedback",
		href: "/examples/custom-visual-feedback",
		description: "Custom visual feedback form description",
	},
	{
		title: "Enhanced feedback",
		href: "/examples/enhanced-feedback",
		description: "Enhanced feedback form description",
	},
	{
		title: "Form with buttons",
		href: "/examples/form-with-buttons",
		description: "Form with buttons description",
	},
	{
		title: "Internacionalization",
		href: "/examples/internacionalization",
		description: "Internacionalization form description",
	},
];

export function MainMenu() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<a
										className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
										href="/"
									>
										LOGO
										<div className="mb-2 mt-4 text-lg font-medium">
											shadcn/ui
										</div>
										<p className="text-sm leading-tight text-muted-foreground">
											Beautifully designed components that you can copy and
											paste into your apps. Accessible. Customizable. Open
											Source.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
							<ListItem href="/docs" title="Introduction">
								Re-usable components built using Radix UI and Tailwind CSS.
							</ListItem>
							<ListItem href="/docs/installation" title="Installation">
								How to install dependencies and structure your app.
							</ListItem>
							<ListItem href="/docs/primitives/typography" title="Typography">
								Styles for headings, paragraphs, lists...etc
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Examples</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
							{examples.map((example) => (
								<ListItem
									key={example.title}
									title={example.title}
									href={example.href}
								>
									{example.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavLink to="/docs">
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Documentation
						</NavigationMenuLink>
					</NavLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className,
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";
