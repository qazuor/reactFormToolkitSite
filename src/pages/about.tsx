import { Breadcrumb } from "@/components/Breadcrumb";

export default function AboutPage() {
	return (
		<div>
			<h1>About</h1>
			<Breadcrumb
				pages={[
					{ href: "/", name: "Home" },
					{ href: "/about", name: "About" },
				]}
			/>
			About
		</div>
	);
}
