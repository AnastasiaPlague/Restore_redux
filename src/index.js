import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import BookstoreService from "./services/bookstore-service";
import { BookstoreServiceProvider } from "./components/bookstore-service-context/bookstore-service-conext";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";

const bookstoreService = new BookstoreService();

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundary>
			<BookstoreServiceProvider value={bookstoreService}>
				<Router>
					<App />
				</Router>
			</BookstoreServiceProvider>
		</ErrorBoundary>
	</Provider>,
	document.getElementById("root")
);
