import React from "react";

import OrderStyles from "./Order.module.css";

const order = props => (
	<div className={OrderStyles.Order}>
		<p>Ingredients: Salad(1)</p>
		<p>
			Price: <strong>CAD$ 5.50</strong>
		</p>
	</div>
);

export default order;
