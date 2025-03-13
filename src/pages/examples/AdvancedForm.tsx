import { Breadcrumb } from "@/components/Breadcrumb";
import AdvancedForm from "@/components/forms/AdvancedForm";

export default function AdvancedFormPage() {
	return (
		<div>
			<h2>Advanced Form</h2>
			<Breadcrumb
				pages={[
					{ href: "/", name: "Home" },
					{ href: "/examples", name: "Examples" },
					{ href: "/examples/advanced-form", name: "Advanced Form" },
				]}
			/>
			Hola mundo 2!
			<AdvancedForm />
		</div>
	);
}
