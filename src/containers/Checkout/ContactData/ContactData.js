import React, { Component, Fragment } from "react";

import axios from "../../../axios-orders";
import { baseURL } from "../../../constants/firebaseEnv";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import ContactDataStyles from "./ContactData.module.css";

class ContactData extends Component {
	state = {
		name: "",
		email: "",
		address: {
			street: "",
			postalCode: "",
		},
	};

	orderHandler = event => {
        event.preventDefault();
        
        this.setState({ loading: true });
        
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price, //- On a real app, recalculate the price on the server!
			customer: {
				name: "Fiyin Eporwei",
				address: {
					street: "123 Sweetland Ave West",
					postalCode: "W4Y 4T6",
					country: "Canada",
					email: "test@test.com",
				},
				deliveryMethod: "express",
			},
		};
		axios
			.post(baseURL + "/orders.json", order)
			.then(response => {
				this.setState({
					loading: false,
                });
                this.props.history.push('/');
			})
			.catch(error => {
				this.setState({
					loading: false,
				});
				console.log(error);
			});
	};

	render() {
		let form = (
			<Fragment>
				<h4>Contact Information</h4>
				<form>
					<input
						className={ContactDataStyles.Input}
						type="text"
						name="name"
						placeholder="John Doe"
					/>
					<input
						className={ContactDataStyles.Input}
						type="text"
						name="email"
						placeholder="John.Doe@example.com"
					/>
					<input
						className={ContactDataStyles.Input}
						type="text"
						name="street"
						placeholder="1st Ave E"
					/>
					<input
						className={ContactDataStyles.Input}
						type="text"
						name="postal code"
						placeholder="100974"
					/>
				</form>
				<Button btnType="Success" clicked={this.orderHandler}>
					ORDER
				</Button>
			</Fragment>
		);

		if (this.state.loading) {
			form = <Spinner />;
		}

		return <div className={ContactDataStyles.ContactData}>{form}</div>;
	}
}

export default ContactData;
