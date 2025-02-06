import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SignUp from "./pages/sign-up/page";
import "./styles/index.css";

const rootElement = document.getElementById("root");

// Check if the root element exists.
if (!rootElement) {
	throw new Error("Root element not found");
}

createRoot(rootElement).render(
	<StrictMode>
		<SignUp />
	</StrictMode>
);
