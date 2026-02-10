import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface IBook {
	name: string;
	author: string;
	pages: number;
}

export default function Book() {
	const params = useParams();

	const name = params.name;

	const [book, setBook] = useState<IBook | null>(null);

	useEffect(() => {
		fetch(`/api/book/${name}`)
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				setBook(json);
			});
	}, [name]);

	return (
		<div>
			{book ? (
				<>
					<h1>{book.name}</h1>
					<h2>{book.author}</h2>
					<h2>{book.pages}</h2>
				</>
			) : (
				<h1>404: Book does not exist</h1>
			)}
		</div>
	);
}
