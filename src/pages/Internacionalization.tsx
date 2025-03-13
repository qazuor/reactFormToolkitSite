import { Breadcrumb } from "@/components/Breadcrumb";
import I18nForm from "@/components/forms/I18nForm";

export default function InternacionalizationPage() {
	return (
		<div>
			<h2>Internacionalization Form</h2>
			<Breadcrumb
				pages={[
					{ href: "/", name: "Home" },
					{ href: "/examples", name: "Examples" },
					{
						href: "/examples/internacionalization",
						name: "Internacionalization",
					},
				]}
			/>
			Hola mundo 2!
			<I18nForm />
		</div>
	);
}
