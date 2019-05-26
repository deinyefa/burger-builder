import React from "react";

import Layout from "./containers/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

// import appStyles from './App.module.css';

function App() {
	return (
		<Layout>
			<BurgerBuilder />
		</Layout>
	);
}

export default App;
