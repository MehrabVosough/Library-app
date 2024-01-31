import { useState } from "react";
import { books as bookData } from "../constants/mockData";

import BookCards from "./BookCards";
import BookSide from "./BookSide";

import styles from "./Books.module.css";
import BookSearch from "./BookSearch";

function Book() {
	const [liked, setLiked] = useState([]);
	const [search, setSearch] = useState([]);
	const [books, setBooks] = useState(bookData);

	const handleLikeList = (book, status) => {
		if (status) {
			const newLike = liked.filter((i) => i.id !== book.id);
			setLiked(newLike);
		} else {
			setLiked((liked) => [...liked, book]);
		}
	};

	const searchHandler = () => {
		if (search) {
			const newBook = bookData.filter((book) =>
				book.title.toLowerCase().includes(search)
			);
			setBooks(newBook);
		} else {
			setBooks(bookData);
		}
	};

	return (
		<>
			<BookSearch search={search} setSearch={setSearch} searchHandler={searchHandler} />
			<div className={styles.container}>
				<div className={styles.cards}>
					{books.map((book) => (
						<BookCards
							key={book.id}
							data={book}
							handleLikeList={handleLikeList}
						/>
					))}
				</div>
				{!!liked.length && (
					<div className={styles.favorite}>
						<h4>Favorits</h4>
						{liked.map((book) => (
							<BookSide key={book.id} data={book} />
						))}
					</div>
				)}
			</div>
		</>
	);
}

export default Book;
