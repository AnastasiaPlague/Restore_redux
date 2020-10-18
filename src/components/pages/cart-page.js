import React from "react";
import { connect } from "react-redux";
import { clearedCart } from "../../actions/";
import ShoppingCartTable from "../shopping-cart-table/shopping-cart-table";

const CartPage = ({ onClear }) => {
	return (
		<div className="container">
			<ShoppingCartTable />
			<div className="d-flex justify-content-end">
				<button type="button" className="btn btn-secondary" onClick={onClear}>
					Clear cart
				</button>
			</div>
		</div>
	);
};

const mapDispatchToProps = {
	onClear: clearedCart
};

export default connect(null, mapDispatchToProps)(CartPage);
