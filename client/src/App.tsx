import "./App.css";

function App() {
	return (
		<>
			<h1>books</h1>
			<form
				method="POST"
				onSubmit={async (event) => {
					event.preventDefault();

					const form = event.target;

					const formJson = Object.fromEntries(
						new FormData(form).entries(),
					);

					console.log(formJson);

					try {
						const response = await fetch("/api/book", {
							method: form.method,
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify(formJson),
						});

						console.log(
							`${response.status} ${response.statusText}`,
						);
					} catch (error) {
						console.log(error);
					}
				}}
			>
				<input id="name" name="name" type="text"></input>
				<br></br>
				<input id="author" name="author" type="text"></input>
				<br></br>
				<input id="pages" name="pages" type="number"></input>
				<br></br>
				<button id="submit">Submit</button>
			</form>
		</>
	);
}

export default App;
