import express from "express";
import mongoose from "mongoose";
import router from "./router";
import cors, { CorsOptions } from "cors";

const app = express();
const port = 1234;

app.use(router);

if (process.env.NODE_ENV === "development") {
	const corsOptions: CorsOptions = {
		origin: "http://localhost:3000",
		optionsSuccessStatus: 200,
	};

	app.use(cors(corsOptions));
}

mongoose
	.connect("mongodb://localhost:27017/testdb")
	.then(() => console.log("Database connection established"))
	.catch((error) => console.log(error));

app.listen(port, () => {
	console.log(`Backend listening on port ${port}`);
});
