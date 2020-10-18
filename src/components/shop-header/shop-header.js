import React from "react";
import "./shop-header.css";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ShopHeader = ({ numItems, total }) => {
	return (
		<header className="shop-header row align-items-center">
			<Link to="/">
				<div className="logo text-dark">ReStore</div>
			</Link>
			<Link to="/cart">
				<div className="shopping-cart">
					<i className="cart-icon fa fa-shopping-cart" />
					{numItems} {numItems === 1 ? "item" : "items"} (${total})
				</div>
			</Link>
		</header>
	);
};

const mapStateToProps = ({ shoppingCart: { orderTotal, cartItems } }) => {
	return {
		total: orderTotal,
		numItems: cartItems.reduce(
			(acc, currentValue) => acc + currentValue.count,
			0
		)
	};
};

export default connect(mapStateToProps)(ShopHeader);
