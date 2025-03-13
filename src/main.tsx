import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import About from "./pages/about.tsx";
import ExamplesPage from "./pages/examples.tsx";
import BasicFormPage from "./pages/examples/basicForm.tsx";
import HomePage from "./pages/home.tsx";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="about" element={<About />} />
				<Route path="examples" element={<ExamplesPage />}>
					<Route path="basic-form" element={<BasicFormPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
