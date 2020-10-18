const updateShoppingCart = (state, { type, payload }) => {
	if (state === undefined) {
		return {
			cartItems: [],
			orderTotal: 0
		};
	}
	switch (type) {
		case "BOOK_ADDED_TO_CART":
			return updateOrder(state, payload, 1);

		case "ALL_BOOKS_REMOVED_FROM_CART":
			const item = state.shoppingCart.cartItems.find(
				({ id }) => id === payload
			);
			return updateOrder(state, payload, -item.count);

		case "BOOK_REMOVED_FROM_CART":
			return updateOrder(state, payload, -1);

		case "UPDATE_ORDER_TOTAL":
			return updateTotal(state);

		case "CLEARED_CART":
			return {
				cartItems: [],
				orderTotal: 0
			};

		default:
			return state.shoppingCart;
	}
};

const updateTotal = state => {
	const { cartItems, orderTotal } = state.shoppingCart;
	return {
		...state.shoppingCart,
		orderTotal: cartItems.reduce((acc, currentValue) => {
			return acc + currentValue.total;
		}, orderTotal)
	};
};

const updateCartItem = (book, item = {}, quantity) => {
	const { id = book.id, count = 0, title = book.title, total = 0 } = item;

	return {
		id,
		title,
		count: count + quantity,
		total: total + quantity * book.price
	};
};

const updateOrder = (state, bookId, quantity) => {
	const {
		shoppingCart: { cartItems },
		bookList: { books }
	} = state;
	const book = books.find(({ id }) => id === bookId);
	const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
	const item = cartItems[itemIndex];
	const newItem = updateCartItem(book, item, quantity);

	return {
		cartItems: updateCartItems(cartItems, newItem, itemIndex),
		orderTotal: 0
	};
};

const updateCartItems = (cartItems, item, idx) => {
	if (item.count === 0) {
		return cartItems.filter(oldItem => item.id !== oldItem.id);
	}
	if (idx === -1) {
		return [...cartItems, item];
	} else {
		return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
	}
};

export default updateShoppingCart;
