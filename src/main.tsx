import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import { MainMenu } from "./components/MainMenu.tsx";
import About from "./pages/about.tsx";
import ExamplesPage from "./pages/examples.tsx";
import AdvancedFormPage from "./pages/examples/AdvancedForm.tsx";
import AsyncValidationPage from "./pages/examples/AsyncValidation.tsx";
import BasicFormPage from "./pages/examples/BasicForm.tsx";
import CustomVisualFeedbackPage from "./pages/examples/CustomVisualFeedback.tsx";
import EnhancedFeedbackPage from "./pages/examples/EnhancedFeedback.tsx";
import FormWithButtonsPage from "./pages/examples/FormWithButtons.tsx";
import InternacionalizationPage from "./pages/examples/Internacionalization.tsx";
import HomePage from "./pages/home.tsx";
import DcosPage from "./pages/docs.tsx";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<MainMenu />
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="about" element={<About />} />
				<Route path="examples" element={<ExamplesPage />}>
					<Route path="basic-form" element={<BasicFormPage />} />
					<Route path="advanced-form" element={<AdvancedFormPage />} />
					<Route path="async-validation" element={<AsyncValidationPage />} />
					<Route
						path="custom-visual-feedback"
						element={<CustomVisualFeedbackPage />}
					/>
					<Route path="enhanced-feedback" element={<EnhancedFeedbackPage />} />
					<Route path="form-with-buttons" element={<FormWithButtonsPage />} />
					<Route
						path="internacionalization"
						element={<InternacionalizationPage />}
					/>
				</Route>
				<Route path="docs" element={<DcosPage />}></Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
