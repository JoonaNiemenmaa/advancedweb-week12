import { Router, Request, Response, json } from "express";
import Book from "./models/Book";

const router = Router();

router.use(json());

router.post("/api/book/", (request: Request, response: Response) => {
	try {
		const book = new Book({
			name: request.body.name,
			author: request.body.author,
			pages: request.body.pages,
		});

		book.save();
		return response.status(200).send("success");
	} catch (error) {
		console.error(error);
		return response.status(500).send("server error");
	}
});

export default router;
