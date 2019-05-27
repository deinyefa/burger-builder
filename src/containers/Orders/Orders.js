import React, { Component } from "react";

import axios from "../../axios-orders";
import { baseURL } from "../../constants/firebaseEnv";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

import Order from "../../components/Orders/Order";
import OrdersStyles from "./Orders.module.css";


class Orders extends Component {
	state = {
		orders: [],
		loading: true,
	};

	componentDidMount = () => {
		axios
			.get(baseURL + "/orders.json")
			.then(res => {
				const fetchedOrders = [];
				for (let key in res.data) {
					fetchedOrders.push({ ...res.data[key], id: key });
				}
				this.setState({
					loading: false,
					orders: fetchedOrders,
				});
			})
			.catch(err => this.setState({ loading: false }));
	};

	displayOrders = () => {
		this.state.orders.map(order => {
			return (
				<Order
					key={order.id}
					ingredients={order.ingredients}
					price={order.price}
				/>
			);
		});
	};

	render() {
		return (
			<div className={OrdersStyles.Orders}>
				<h1>Previous Orders</h1>
				{/* {this.displayOrders} */}
			</div>
		);
	}
}

export default withErrorHandler(Orders, axios);
