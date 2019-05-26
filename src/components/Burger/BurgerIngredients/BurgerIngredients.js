import React from "react";
import PropTypes from "prop-types";

import BurgerIngredientsStyles from "./BurgerIngredients.module.css";

const burgerIngredients = props => {
	let ingredient = null;

	switch (props.type) {
		case "bread-bottom":
			ingredient = (
				<div className={BurgerIngredientsStyles.BreadBottom} />
			);
			break;
		case "bread-top":
			ingredient = (
				<div className={BurgerIngredientsStyles.BreadTop}>
					<div className={BurgerIngredientsStyles.Seeds1} />
					<div className={BurgerIngredientsStyles.Seeds2} />
				</div>
			);
			break;
		case "meat":
			ingredient = <div className={BurgerIngredientsStyles.Meat} />;
			break;
		case "cheese":
			ingredient = <div className={BurgerIngredientsStyles.Cheese} />;
			break;
		case "salad":
			ingredient = <div className={BurgerIngredientsStyles.Salad} />;
			break;
		case "bacon":
			ingredient = <div className={BurgerIngredientsStyles.Bacon} />;
			break;
		default:
			ingredient = null;
	}

	return ingredient;
};

// proptype validation!!
burgerIngredients.propTypes = {
	type: PropTypes.string.isRequired,
};

export default burgerIngredients;
