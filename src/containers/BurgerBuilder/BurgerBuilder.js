import React, { Component, Fragment } from "react";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";

import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

import INGREDIENT_PRICES from "../../constants/IngredientPrices";
import axios from "../../axios-orders";
import { baseURL } from "../../constants/firebaseEnv";

class BurgerBuilder extends Component {
	state = {
		ingredients: null,
		totalPrice: 2,
		purchasable: false,
		purchasing: false,
		loading: false,
		error: false,
	};

	componentDidMount = () => {
		axios
			.get(baseURL + "/ingredients.json")
			.then(res => {
				this.setState({ ingredients: res.data });
			})
			.catch(err => this.setState({ error: true }));
	};

	addIngredientHandler = type => {
		const { ingredients, totalPrice } = this.state;

		const updatedCount = ingredients[type] + 1;
		const newPrice = totalPrice + INGREDIENT_PRICES[type];

		// STATE SHOULD REMAIN IMMUTABLE
		// ... will copy the contents of state into updatedIngredients object
		const updatedIngredients = {
			...ingredients,
		};

		updatedIngredients[type] = updatedCount;
		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients,
		});
		this.updatePurchaseState(updatedIngredients);
	};

	removeIngredientHandler = type => {
		const { ingredients, totalPrice } = this.state;

		if (ingredients[type] <= 0) {
			return;
		}

		const newPrice = totalPrice - INGREDIENT_PRICES[type];
		const updatedCount = ingredients[type] - 1;

		// !!!!! STATE SHOULD REMAIN IMMUTABLE !!!!!!
		// ... will copy the contents of state into updatedIngredients object
		const updatedIngredients = {
			...ingredients,
		};

		updatedIngredients[type] = updatedCount;
		this.setState({
			ingredients: updatedIngredients,
			totalPrice: newPrice,
		});
		this.updatePurchaseState(updatedIngredients);
	};

	updatePurchaseState = ingredients => {
		// ---------- WHY NOT THIS ??
		// console.log(Object.values(ingredients))
		// --> [0, 0, 0, 0]

		const sum = Object.keys(ingredients)
			.map(igKey => {
				return ingredients[igKey];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);
		// console.log(sum);
		this.setState({ purchasable: sum > 0 });
	};

	purchaseHandler = () => {
		this.setState({ purchasing: true });
	};

	purchaseCancelHandler = () => {
		this.setState({ purchasing: !this.state.purchasing });
	};

	purchaseContinueHandler = () => {
		this.setState({ loading: true });
		const order = {
			ingredients: this.state.ingredients,
			price: this.state.totalPrice, //- On a real app, recalculate the price on the server!
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
					purchasing: !this.state.purchasing,
				});
				console.log(response);
			})
			.catch(error => {
				this.setState({
					loading: false,
					purchasing: !this.state.purchasing,
				});
				console.log(error);
			});
	};

	render() {
		const disabledInfo = {
			...this.state.ingredients,
		};

		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		// disabled info will now be
		// { meat: true, salad: false, ...etc}

		let orderSummary = (
			<OrderSummary
				ingredients={this.state.ingredients}
				purchaseCanceled={this.purchaseCancelHandler}
				purchaseContinued={this.purchaseContinueHandler}
				orderTotal={this.state.totalPrice.toFixed(2)}
			/>
		);

		if (this.state.loading || !this.state.ingredients) {
			orderSummary = <Spinner />;
		}

		let burger = this.state.error ? (
			<p style={{ textAlign: "center" }}>
				Oh no! Something went very wrong. Please come back another time.
			</p>
		) : (
			<Spinner />
		);

		if (this.state.ingredients) {
			burger = (
				<Fragment>
					<Burger ingredients={this.state.ingredients} />
					<BuildControls
						ingredientAdded={this.addIngredientHandler}
						ingredientRemoved={this.removeIngredientHandler}
						disabled={disabledInfo}
						purchasable={this.state.purchasable}
						price={this.state.totalPrice.toFixed(2)}
						ordered={this.purchaseHandler}
					/>
				</Fragment>
			);
		}

		return (
			<Fragment>
				<Modal
					show={this.state.purchasing}
					modalClosed={this.purchaseCancelHandler}>
					{orderSummary}
				</Modal>
				{burger}
			</Fragment>
		);
	}
}

export default withErrorHandler(BurgerBuilder, axios);
