import { MdOutlineManageSearch } from "react-icons/md";

import styles from "./BookSearch.module.css"

function BookSearch({ search, setSearch, searchHandler }) {
	return (
		<div className={styles.search}>
			<input
				type="search"
				placeholder="Search Title"
				value={search}
				onChange={(e) => setSearch(e.target.value.toLowerCase())}
			/>
			<button  onClick={searchHandler}>
				<MdOutlineManageSearch />
			</button>
		</div>
	);
}

export default BookSearch;
