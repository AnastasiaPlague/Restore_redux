import React, { Component } from "react";
import compose from "../../utils/compose";
import { connect } from "react-redux";
import { fetchBooks } from "../../actions";
import BookList from "../book-list/book-list";
import withBookstoreService from "../hoc/withBookstoreService";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
import "./book-list-container.css";

class BookListContainer extends Component {
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
		return <BookList books={books} />;
	}
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
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
)(BookListContainer);
