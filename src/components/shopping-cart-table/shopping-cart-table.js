import React from "react";

const ShoppingCartTable = () => {
	return (
		<div className="shopping-cart-table">
			<h2>Your Order</h2>
			<table className="table">
				<thead>
					<tr>
						<th>#</th>
						<th>Item</th>
						<th>Count</th>
						<th>Price</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>More Books</td>
						<td>2</td>
						<td>$50</td>
						<td className="d-flex justify-content-between">
							<button className="btn btn-outline-danger btn-sm float-right">
								<i className="fa fa-trash-o" />
							</button>
							<button className="btn btn-outline-success btn-sm float-right">
								<i className="fa fa-plus-circle" />
							</button>
							<button className="btn btn-outline-warning btn-sm float-right">
								<i className="fa fa-minus-circle" />
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ShoppingCartTable;
