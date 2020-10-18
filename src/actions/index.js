const booksRequested = () => {
	return {
		type: "FETCH_BOOKS_REQUESTED"
	};
};

const booksLoaded = newBooks => {
	return {
		type: "FETCH_BOOKS_SUCCESS",
		payload: newBooks
	};
};

const booksError = error => {
	return {
		type: "FETCH_BOOKS_FAILURE",
		payload: error
	};
};

const bookAddedToCart = bookId => {
	return dispatch => {
		dispatch({
			type: "BOOK_ADDED_TO_CART",
			payload: bookId
		});
		dispatch({
			type: "UPDATE_ORDER_TOTAL"
		});
	};
};

const allBooksRemovedFromCart = bookId => {
	return dispatch => {
		dispatch({
			type: "ALL_BOOKS_REMOVED_FROM_CART",
			payload: bookId
		});
		dispatch({
			type: "UPDATE_ORDER_TOTAL"
		});
	};
};
const bookRemovedFromCart = bookId => {
	return dispatch => {
		dispatch({
			type: "BOOK_REMOVED_FROM_CART",
			payload: bookId
		});
		dispatch({
			type: "UPDATE_ORDER_TOTAL"
		});
	};
};

const clearedCart = () => {
	return {
		type: "CLEARED_CART"
	};
};

// const fetchBooksOld = (dispatch, bookstoreService) => () => {
// 	dispatch(booksRequested());
// 	bookstoreService
// 		.getBooks()
// 		.then(data => {
// 			dispatch(booksLoaded(data));
// 		})
// 		.catch(error => {
// 			dispatch(booksError(error));
// 		});
// };

const fetchBooks = bookstoreService => () => dispatch => {
	dispatch(booksRequested());
	bookstoreService
		.getBooks()
		.then(data => {
			dispatch(booksLoaded(data));
		})
		.catch(error => {
			dispatch(booksError(error));
		});
};

export {
	fetchBooks,
	bookAddedToCart,
	allBooksRemovedFromCart,
	bookRemovedFromCart,
	clearedCart
};
