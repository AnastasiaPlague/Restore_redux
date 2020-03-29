import React, { Component } from "react";
import "./app.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/home-page";
import CartPage from "../pages/cart-page";
import ShopHeader from "../shop-header/shop-header";

class App extends Component {
	render() {
		return (
			<main className="container" role="main">
				<ShopHeader numItems={5} total={210} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/cart" component={CartPage} />
				</Switch>
			</main>
		);
	}
}

export default App;
