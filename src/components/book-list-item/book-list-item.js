import React from "react";
import "./book-list-item.css";

const BookListItem = ({ book }) => {
	const { title, author, price, coverImage } = book;

	return (
		<div className="book-list-item d-flex container-sm">
			<div className="book-cover mb-3">
				<img className="cover-image img-fluid" src={coverImage} alt="cover" />
			</div>
			<div className="book-details mb-2 d-flex flex-column justify-content-around">
				{" "}
				<span className="book-title">{title}</span>
				<div className="book-author">{author}</div>
				<div className="book-price">${price}</div>
				<button className="btn btn-info add-to-cart">Add to cart</button>
			</div>
		</div>
	);
};

export default BookListItem;
