import React from "react";
import { bindActionCreators } from "redux";
import { bookAddedToCart } from "../../actions/";
import BookListItem from "../book-list-item/book-list-item";
import { connect } from "react-redux";

const BookList = ({ books, onAddedToCart }) => {
	return (
		<ul className="book-list p-0 row">
			{books.map(book => {
				return (
					<li className="col-lg-4 col-md-6 col-12" key={book.id}>
						<BookListItem
							book={book}
							onAddedToCart={() => onAddedToCart(book.id)}
						/>
					</li>
				);
			})}
		</ul>
	);
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			onAddedToCart: bookAddedToCart
		},
		dispatch
	);
};

export default connect(null, mapDispatchToProps)(BookList);
