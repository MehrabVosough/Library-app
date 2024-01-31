import styles from "./Layout.module.css";

function Layout({ children }) {
	return (
		<>
			<header className={styles.header}>
				<h1>Book App</h1>
				<p>
					<a href="https://github.com/MehrabVosough/Library-app">Codes</a> |
					React.js
				</p>
			</header>
			{children}
			<footer className={styles.footer}>
				<p>Developed By Mehrab With ❤️</p>
			</footer>
		</>
	);
}

export default Layout;
