import { model, Model, Schema } from "mongoose";

export interface IBook {
	name: string;
	author: string;
	pages: number;
}

const bookSchema = new Schema<IBook>({
	name: { type: String, required: true },
	author: { type: String, required: true },
	pages: { type: Number, required: true },
});

const Book = model<IBook>("Book", bookSchema);

export default Book;
