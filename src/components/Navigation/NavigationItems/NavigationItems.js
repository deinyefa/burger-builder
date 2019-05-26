import React from "react";

import NavigationItemsStyles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => (
	<ul className={NavigationItemsStyles.NavigationItems}>
		<NavigationItem linkTarget="/" linkTitle="Build a Burger" active />
		<NavigationItem linkTarget="/checkout" linkTitle="Checkout" />
	</ul>
);

export default navigationItems;
