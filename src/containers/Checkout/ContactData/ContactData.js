import React, { Component, Fragment } from "react";

import axios from "../../../axios-orders";
import { baseURL } from "../../../constants/firebaseEnv";

import Button from "../../../components/UI/Button/Button";
import Input from "../../../components/UI/Input/Input";
import Spinner from "../../../components/UI/Spinner/Spinner";
import ContactDataStyles from "./ContactData.module.css";

class ContactData extends Component {
	state = {
		orderForm: {
			name: {
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "Your Name",
				},
				value: "",
				validation: {
					required: true,
				},
				valid: false,
				touched: false,
			},
			street: {
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "123 Sweetland Ave West",
				},
				value: "",
				validation: {
					required: true,
				},
				valid: false,
				touched: false,
			},
			postalCode: {
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "W4Y 4T6",
				},
				value: "",
				validation: {
					required: true,
				},
				valid: false,
				touched: false,
			},
			country: {
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "Canada",
				},
				value: "",
				validation: {
					required: true,
				},
				valid: false,
				touched: false,
			},
			email: {
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "John.Doe@example.com",
				},
				value: "",
				validation: {
					required: true,
				},
				valid: false,
				touched: false,
			},
			deliveryMethod: {
				elementType: "select",
				elementConfig: {
					options: [
						{
							value: "fastest",
							displayValue: "Fastest",
						},
						{
							value: "standard",
							displayValue: "Standard",
						},
					],
				},
				value: "fastest",
				validation: {},
				valid: true,
			},
		},
		loading: false,
		formIsValid: false,
	};

	orderHandler = event => {
		event.preventDefault();
		this.setState({ loading: true });

		const formData = {};
		for (let elID in this.state.orderForm) {
			formData[elID] = this.state.orderForm[elID].value;
		}
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.totalPrice, //- On a real app, recalculate the price on the server!
			orderData: formData,
		};

		axios
			.post(baseURL + "/orders.json", order)
			.then(response => {
				this.setState({
					loading: false,
				});
				this.props.history.push("/");
			})
			.catch(error => {
				this.setState({
					loading: false,
				});
				console.log(error);
			});
	};

	inputChangedHandler = (event, inputIdentifier) => {
		const updatedContactForm = {
			...this.state.orderForm,
		};
		// Deeply clone child objects! -> name, street, postalCode, etc
		const updatedFormElement = { ...updatedContactForm[inputIdentifier] };
		updatedFormElement.value = event.target.value;
		// checking validation properties...
		updatedFormElement.valid = this.checkValidity(
			updatedFormElement.value,
			updatedFormElement.validation
		);
		updatedFormElement.touched = true;
		updatedContactForm[inputIdentifier] = updatedFormElement;

		let formIsValid = true;
		for (let inputID in updatedContactForm) {
			formIsValid = updatedContactForm[inputID].valid && formIsValid;
		}

		this.setState({ orderForm: updatedContactForm, formIsValid });
	};

	checkValidity = (value, rules) => {
		let isValid = false;

		if (!rules) {
			return true;
		}

		if (rules.required) {
			isValid = value.trim() !== "";
		}
		return isValid;
	};

	render() {
		const formElementsArray = [];

		for (let key in this.state.orderForm) {
			formElementsArray.push({
				id: key,
				config: this.state.orderForm[key],
			});
		}

		let form = (
			<Fragment>
				<h4>Contact Information</h4>
				<form onSubmit={this.orderHandler}>
					{formElementsArray.map(el => (
						<Input
							key={el.id}
							elementType={el.config.elementType}
							elementConfig={el.config.elementConfig}
							value={el.config.value}
							changed={event =>
								this.inputChangedHandler(event, el.id)
							}
							shouldValidate={el.config.validation}
							invalid={!el.config.valid}
							touched={el.config.touched}
						/>
					))}
					<Button
						btnType="Success"
						disabled={!this.state.formIsValid}>
						ORDER
					</Button>
				</form>
			</Fragment>
		);

		if (this.state.loading) {
			form = <Spinner />;
		}

		return <div className={ContactDataStyles.ContactData}>{form}</div>;
	}
}

export default ContactData;
