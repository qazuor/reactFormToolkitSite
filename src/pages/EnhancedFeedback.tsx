import { Breadcrumb } from "@/components/Breadcrumb";
import EnhancedFeedbackForm from "@/components/forms/EnhancedFeedbackForm";

export default function EnhancedFeedbackPage() {
	return (
		<div>
			<h2>Enhanced Feedback Form</h2>
			<Breadcrumb
				pages={[
					{ href: "/", name: "Home" },
					{ href: "/examples", name: "Examples" },
					{
						href: "/examples/enhanced-feedback",
						name: "Enhanced Feedback",
					},
				]}
			/>
			Hola mundo 2!
			<EnhancedFeedbackForm />
		</div>
	);
}
