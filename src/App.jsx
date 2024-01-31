import Book from "./components/Book";
import { books } from "./constants/mockData";
import Layout from "./layouts/Layout";

function App() {
	return (
		<Layout>
			<Book/>
		</Layout>
	);
}

export default App;
