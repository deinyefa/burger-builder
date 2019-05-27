import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./containers/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";

// import appStyles from './App.module.css';

function App() {
	return (
		<Layout>
			<Switch>
				<Route path="/checkout" component={Checkout} />
				<Route path="/" exact component={BurgerBuilder} />
			</Switch>
		</Layout>
	);
}

export default App;
