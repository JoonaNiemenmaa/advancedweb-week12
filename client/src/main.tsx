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
				<Route index element={<SubmitBook></SubmitBook>}></Route>
				<Route path="/book/:name" element={<Book></Book>}></Route>
				<Route
					path="/*"
					element={
						<h1>
							404: This is not the webpage you are looking for
						</h1>
					}
				></Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
