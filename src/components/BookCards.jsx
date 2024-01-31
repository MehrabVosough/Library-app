import { useState } from "react";
import { FaHeart } from "react-icons/fa";

import styles from "./BookCard.module.css";

function BookCards({ data, handleLikeList }) {
	const { title, author, pages, language, image } = data;

	const [like, setLike] = useState(false);

	const likeHandler = () => {
		setLike((like) => !like);
		handleLikeList(data, like);
	};
	return (
		<div className={styles.card}>
			<img src={image} alt={title} />
			<div className={styles.info}>
				<h3>{title}</h3>
				<p>{author}</p>
				<div>
					<span>{language}</span>
					<span>{pages} Pages</span>
				</div>
			</div>
			<button onClick={likeHandler}>
				<FaHeart color={like ? "red" : "#e0e0e0"} fontSize="1.8rem" />
			</button>
		</div>
	);
}

export default BookCards;
