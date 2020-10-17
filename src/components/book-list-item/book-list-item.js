import React from "react";
import "./book-list-item.css";

const BookListItem = ({ book, onAddedToCart }) => {
	const { title, author, price, coverImage } = book;

	return (
		<div className="book-list-item d-flex h-100 mb-5">
			<div className="book-cover mb-3 mr-3">
				<img className="cover-image img-fluid" src={coverImage} alt="cover" />
			</div>
			<div className="book-details mb-2 w-50 d-flex flex-column justify-content-center">
				<span className="book-title">{title}</span>
				<div className="book-author">{author}</div>
				<div className="book-price">${price}</div>
				<button className="btn btn-info add-to-cart" onClick={onAddedToCart}>
					Add to cart
				</button>
			</div>
		</div>
	);
};

export default BookListItem;
