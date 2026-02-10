import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import SubmitBook from "./SubmitBook.tsx";
import Book from "./Book.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SubmitBook></SubmitBook>}></Route>
				<Route path="/:name" element={<Book></Book>}></Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
