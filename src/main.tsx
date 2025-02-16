import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SignUp from "./pages/sign-up/page";
import "./styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import LogIn from "./pages/log-in/page";
const rootElement = document.getElementById("root");

// Check if the root element exists.
if (!rootElement) {
	throw new Error("Root element not found");
}

createRoot(rootElement).render(
	<BrowserRouter>
		<Routes>
			<Route path="/sign-up" element={<SignUp/>}/>
			<Route path="/log-in" element={<LogIn/>}/>
		</Routes>
	</BrowserRouter>
);
