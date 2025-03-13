import { Breadcrumb } from "@/components/Breadcrumb";
import CustomVisualFeedbackForm from "@/components/forms/CustomVisualFeedbackForm";

export default function CustomVisualFeedbackPage() {
	return (
		<div>
			<h2>Custom Visual Feedback Form</h2>
			<Breadcrumb
				pages={[
					{ href: "/", name: "Home" },
					{ href: "/examples", name: "Examples" },
					{
						href: "/examples/custom-visual-feedback",
						name: "Custom Visual Feedback",
					},
				]}
			/>
			Hola mundo 2!
			<CustomVisualFeedbackForm />
		</div>
	);
}
