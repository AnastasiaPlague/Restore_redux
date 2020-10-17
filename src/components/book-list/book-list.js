import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBooks } from "../../actions/";
import compose from "../../utils/compose";
import withBookstoreService from "../hoc/withBookstoreService";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
import BookListItem from "../book-list-item/book-list-item";
import "./book-list.css";

class BookList extends Component {
	componentDidMount() {
		this.props.fetchBooks();
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

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
	return {
		fetchBooks: fetchBooks(dispatch, bookstoreService)
	};
};

export default compose(
	withBookstoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookList);
