import React, { Component } from "react";
import { connect } from "react-redux";
import { booksLoaded, booksRequested, booksError } from "../../actions/";
import compose from "../../utils/compose";
import withBookstoreService from "../hoc/withBookstoreService";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
import BookListItem from "../book-list-item/book-list-item";
import "./book-list.css";

class BookList extends Component {
	componentDidMount() {
		const {
			bookstoreService,
			booksLoaded,
			booksRequested,
			booksError
		} = this.props;
		booksRequested();
		bookstoreService
			.getBooks()
			.then(data => {
				booksLoaded(data);
			})
			.catch(error => {
				booksError(error);
			});
	}

	render() {
		const { books, loading, error } = this.props;
		if (loading) {
			return <Spinner />;
		}

		if (error) {
			return <ErrorIndicator />;
		}
		return (
			<ul className="book-list p-0 row">
				{books.map(book => {
					return (
						<li className="col-lg-4 col-md-6 col-12" key={book.id}>
							<BookListItem book={book} />
						</li>
					);
				})}
			</ul>
		);
	}
}

const mapStateToProps = ({ books, loading, error }) => {
	return {
		books,
		loading,
		error
	};
};

const mapDispatchToProps = {
	booksLoaded,
	booksRequested,
	booksError
};

export default compose(
	withBookstoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookList);
