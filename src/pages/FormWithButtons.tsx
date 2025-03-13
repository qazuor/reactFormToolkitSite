import { Breadcrumb } from "@/components/Breadcrumb";
import FormWithButtons from "@/components/forms/FormWithButtons";

export default function FormWithButtonsPage() {
	return (
		<div>
			<h2>Form With Buttons</h2>
			<Breadcrumb
				pages={[
					{ href: "/", name: "Home" },
					{ href: "/examples", name: "Examples" },
					{
						href: "/examples/form-with-buttons",
						name: "Form With Buttons",
					},
				]}
			/>
			Hola mundo 2!
			<FormWithButtons />
		</div>
	);
}
