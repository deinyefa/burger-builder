import React from "react";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import CheckoutSummaryStyles from "./CheckoutSummary.module.css";

const checkoutSummary = props => {
	return (
		<div className={CheckoutSummaryStyles.CheckoutSummary}>
			<h1>Please review your order</h1>
			<div style={{ width: "100%", margin: "auto" }}>
				<Burger ingredients={props.ingredients} />
			</div>
			<Button btnType="Danger" clicked={props.checkoutCanceled}>
				CANCEL
			</Button>
			<Button btnType="Success" clicked={props.checkoutContinued}>
				CONTINUE
			</Button>
		</div>
	);
};

export default checkoutSummary;
