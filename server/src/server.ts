import express, { Request, Response } from "express";
import mongoose from "mongoose";
import router from "./router";
import cors, { CorsOptions } from "cors";
import path from "path";

const app = express();
const port = 1234;

app.use(router);

if (process.env.NODE_ENV === "development") {
	console.log("Running in development mode...");

	const corsOptions: CorsOptions = {
		origin: "http://localhost:3000",
		optionsSuccessStatus: 200,
	};

	app.use(cors(corsOptions));
} else if (process.env.NODE_ENV === "production") {
	console.log("Running in production mode...");
	app.use(express.static(path.resolve(__dirname, "../..", "client", "dist")));

	app.get("/*path", (request: Request, response: Response) => {
		response.sendFile(
			path.resolve(__dirname, "../..", "client", "dist", "index.html"),
		);
	});
}

mongoose
	.connect("mongodb://localhost:27017/testdb")
	.then(() => console.log("Database connection established"))
	.catch((error) => console.log(error));

app.listen(port, () => {
	console.log(`Backend listening on port ${port}`);
});
