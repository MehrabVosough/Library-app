import styles from "./BookSide.module.css";

function BookSide({ data: { image, title } }) {
	return (
		<div className={styles.card}>
			<img src={image} alt={title} />
			<p>{title}</p>
		</div>
	);
}

export default BookSide;
