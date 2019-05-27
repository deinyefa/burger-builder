import React, { Component } from "react";
import { Route } from 'react-router-dom';

// import CheckoutStyles from "./Checkout.module.css";
import CheckoutSummary from "../../components/Orders/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
	state = {
		ingredients: {
			salad: 1,
			meat: 1,
			cheese: 1,
		},
    };
    
    componentDidMount = () => {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()) {
            // ['salad', 1]
            ingredients[param[0]] = +param[1]
        }
        this.setState({ ingredients });
    }

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
                <Route path={this.props.match.path + '/contact-data'} component={ContactData} />
			</div>
		);
	}
}

export default Checkout;
