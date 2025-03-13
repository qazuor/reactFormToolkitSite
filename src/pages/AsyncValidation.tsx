import { Breadcrumb } from "@/components/Breadcrumb";
import AsyncValidation from "@/components/forms/AsyncValidation";

export default function AsyncValidationPage() {
	return (
		<div>
			<h2>Async Validation Form</h2>
			<Breadcrumb
				pages={[
					{ href: "/", name: "Home" },
					{ href: "/examples", name: "Examples" },
					{ href: "/examples/async-validation", name: "Async Validation" },
				]}
			/>
			Hola mundo 2!
			<AsyncValidation />
		</div>
	);
}
