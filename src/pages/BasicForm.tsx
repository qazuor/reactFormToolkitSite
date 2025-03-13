import { Breadcrumb } from "@/components/Breadcrumb";
import BasicForm from "@/components/forms/BasicForm";

export default function BasicFormPage() {
	return (
		<div>
			<h2>Basic Form</h2>
			<Breadcrumb
				pages={[
					{ href: "/", name: "Home" },
					{ href: "/examples", name: "Examples" },
					{ href: "/examples/basic-form", name: "Basic Form" },
				]}
			/>
			Hola mundo 2!
			<BasicForm />
		</div>
	);
}
