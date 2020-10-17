import React from "react";
import BookList from "../book-list/book-list";
import ShoppingCartTable from "../shopping-cart-table/shopping-cart-table";

const HomePage = () => {
	return (
		<div className="container">
			<BookList />
			<ShoppingCartTable />
		</div>
	);
};

export default HomePage;
