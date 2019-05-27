import React, { Component } from "react";
import { Route } from "react-router-dom";

// import CheckoutStyles from "./Checkout.module.css";
import CheckoutSummary from "../../components/Orders/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
	state = {
		ingredients: null,
		price: 0,
	};

	componentWillMount = () => {
		const query = new URLSearchParams(this.props.location.search);
		const ingredients = {};
		let price = 0;
		for (let param of query.entries()) {
			// ['salad', 1]
			if (param[0] === "price") {
				price = param[1];
			} else {
				ingredients[param[0]] = +param[1];
			}
		}
		this.setState({ ingredients, price });
	};

	checkoutCanceledHandler = () => {
		this.props.history.goBack();
	};

	checkoutContinueHandler = () => {
		this.props.history.replace("/checkout/contact-data");
	};

	render() {
		return (
			<div>
				<CheckoutSummary
					ingredients={this.state.ingredients}
					checkoutCanceled={this.checkoutCanceledHandler}
					checkoutContinued={this.checkoutContinueHandler}
				/>
				<Route
					path={this.props.match.path + "/contact-data"}
					render={props => (
						<ContactData
							ingredients={this.state.ingredients}
							totalPrice={this.state.price}
							{...props}
						/>
					)}
				/>
			</div>
		);
	}
}

export default Checkout;
