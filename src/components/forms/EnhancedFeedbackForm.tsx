import {
	FormField,
	FormProvider,
	SubmitButton,
} from "@qazuor/react-form-toolkit";
import type { AsyncValidateFunction } from "@qazuor/react-form-toolkit";
import { useState } from "react";
import { z } from "zod";

// Define the form schema using Zod
const formSchema = z
	.object({
		username: z.string().min(3, "Username must be at least 3 characters"),
		email: z.string().email("Please enter a valid email address"),
		password: z
			.string()
			.min(8, "Password must be at least 8 characters")
			.refine((val) => /[A-Z]/.test(val), {
				message: "Password must contain at least one uppercase letter",
			})
			.refine((val) => /[0-9]/.test(val), {
				message: "Password must contain at least one number",
			}),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});

// Infer the type from the schema
type FormValues = z.infer<typeof formSchema>;

// Default values
const defaultValues: Partial<FormValues> = {
	username: "",
	email: "",
	password: "",
	confirmPassword: "",
};

// Simulated database of existing users
const existingUsers = [
	{ username: "admin", email: "admin@example.com" },
	{ username: "user1", email: "user1@example.com" },
];

export default function EnhancedFeedbackForm() {
	const [formData, setFormData] = useState<FormValues | null>(null);
	const [submitStatus, setSubmitStatus] = useState<
		"idle" | "loading" | "success" | "error"
	>("idle");

	// Async validation function for username
	const validateUsername: AsyncValidateFunction = async (value: unknown) => {
		// Simulate API call delay
		await new Promise((resolve) => setTimeout(resolve, 1000));

		// Check if username exists
		const exists = existingUsers.some(
			(user) => user.username.toLowerCase() === (value as string).toLowerCase(),
		);
		return exists ? "This username is already taken" : true;
	};

	// Async validation function for email
	const validateEmail: AsyncValidateFunction = async (value) => {
		// Simulate API call delay
		await new Promise((resolve) => setTimeout(resolve, 1500));

		// Check if email exists
		const exists = existingUsers.some(
			(user) => user.email.toLowerCase() === (value as string).toLowerCase(),
		);
		return exists ? "This email is already registered" : true;
	};

	const handleSubmit = async (data: FormValues) => {
		setSubmitStatus("loading");

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 2000));

		setFormData(data);
		setSubmitStatus("success");
	};

	return (
		<div className="mx-auto max-w-md rounded-xl bg-white p-6 shadow-md">
			<h2 className="mb-4 font-bold text-xl">Enhanced Feedback Form</h2>
			<p className="mb-4 text-gray-600 text-sm">
				Try using usernames "admin" or "user1" to see validation errors.
				<br />
				Try emails "admin@example.com" or "user1@example.com".
			</p>

			<FormProvider<FormValues>
				onSubmit={handleSubmit}
				schema={formSchema}
				defaultValues={defaultValues}
				className="space-y-4"
				mode="onChange" // Use onChange mode for better UX with async validation
			>
				<FormField
					name="username"
					label="Username"
					required={true}
					asyncValidate={validateUsername}
					debounceTime={500}
				>
					<input
						type="text"
						className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Choose a username"
					/>
				</FormField>

				<FormField
					name="email"
					label="Email Address"
					required={true}
					asyncValidate={validateEmail}
					debounceTime={800}
				>
					<input
						type="email"
						className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="your.email@example.com"
					/>
				</FormField>

				<FormField name="password" label="Password" required={true}>
					<input
						type="password"
						className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Create a password"
					/>
				</FormField>

				<FormField
					name="confirmPassword"
					label="Confirm Password"
					required={true}
				>
					<input
						type="password"
						className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Confirm your password"
					/>
				</FormField>

				<SubmitButton
					className="mt-6 w-full"
					text="Create Account"
					loadingText="Creating Account..."
					successText="Account Created!"
				/>
			</FormProvider>
			{submitStatus && (
				<div className="mt-6 animate-fadeIn rounded-md border p-4">
					<h3 className="mb-2 font-semibold text-lg">
						{submitStatus === "success"
							? "Form Submitted!"
							: "Submitting Form..."}
					</h3>
					{submitStatus === "success" ? (
						<p>Your form data has been successfully submitted.</p>
					) : (
						<p>Please wait while we process your request...</p>
					)}
				</div>
			)}
			{formData && (
				<div className="mt-6 animate-fadeIn rounded-md border border-gray-200 bg-gray-50 p-4">
					<h3 className="mb-2 font-semibold text-lg">Submitted Data:</h3>
					<pre className="overflow-auto text-sm">
						{JSON.stringify(formData, null, 2)}
					</pre>
				</div>
			)}
		</div>
	);
}
