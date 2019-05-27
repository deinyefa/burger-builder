import React, { Component } from "react";

import Order from '../../components/Orders/Order';
import OrdersStyles from './Orders.module.css'

class Orders extends Component {
	render() {
		return (
			<div className={OrdersStyles.Orders}>
				<h1>Previous Orders</h1>
                <Order />
                <Order />
			</div>
		);
	}
}

export default Orders;
