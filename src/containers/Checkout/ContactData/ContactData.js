import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
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
    
    orderHandler = () => {
        
    }

	render() {
		return (
			<div className={ContactDataStyles.ContactData}>
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
				<Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
			</div>
		);
	}
}

export default ContactData;
