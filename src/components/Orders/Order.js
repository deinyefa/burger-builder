import React from "react";

import OrderStyles from "./Order.module.css";

const order = props => {
	const ingredientOutput = props.ingredients.map(ig => {
		return (
			<span key={ig.name} className={OrderStyles.Ingredients}>
				{ig.name} ({ig.amount})
			</span>
		);
	});
	return (
		<div className={OrderStyles.Order}>
			<p>Ingredients: {ingredientOutput}</p>
			<p>
				Price: <strong>CAD$ {props.price.toFixed(2)}</strong>
			</p>
		</div>
	);
};

export default order;
