import { Breadcrumb } from "@/components/Breadcrumb";

export default function HomePage() {
	return (
		<div>
			<h1>Home</h1>
			<Breadcrumb pages={[{ href: "/", name: "Home" }]} />
			Hola mundo!
		</div>
	);
}
