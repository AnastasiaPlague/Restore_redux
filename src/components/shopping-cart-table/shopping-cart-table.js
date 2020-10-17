import React from "react";
import { connect } from "react-redux";
import {
	bookAddedToCart,
	allBooksRemovedFromCart,
	bookRemovedFromCart
} from "../../actions/";

const ShoppingCartTable = ({
	items = [],
	total,
	onIncrease,
	onDecrease,
	onDelete
}) => {
	const renderRow = (item, index) => {
		const { id, title, count, total } = item;
		return (
			<tr key={id}>
				<td>{index + 1}</td>
				<td>{title}</td>
				<td>{count}</td>
				<td>${total}</td>
				<td className="d-flex w-75 justify-content-between">
					<button
						className="btn btn-outline-danger btn-sm float-right"
						onClick={() => onDelete(id)}
					>
						<i className="fa fa-trash-o" />
					</button>
					<button
						className="btn btn-outline-success btn-sm float-right"
						onClick={() => onIncrease(id)}
					>
						<i className="fa fa-plus-circle" />
					</button>
					<button
						className="btn btn-outline-warning btn-sm float-right"
						onClick={() => onDecrease(id)}
					>
						<i className="fa fa-minus-circle" />
					</button>
				</td>
			</tr>
		);
	};

	return (
		<div className="shopping-cart-table">
			<h2>Your Order</h2>
			<table className="table">
				<thead>
					<tr>
						<th>#</th>
						<th>Item</th>
						<th>Count</th>
						<th>Total</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>{items.map(renderRow)}</tbody>
			</table>
			<h4 className="total text-right">Total: ${total}</h4>
		</div>
	);
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
	return {
		items: cartItems,
		total: orderTotal
	};
};

const mapDispatchToProps = {
	onDecrease: bookRemovedFromCart,
	onIncrease: bookAddedToCart,
	onDelete: allBooksRemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
