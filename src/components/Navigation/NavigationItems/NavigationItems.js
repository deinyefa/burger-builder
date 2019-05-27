import React from "react";

import NavigationItemsStyles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => (
	<ul className={NavigationItemsStyles.NavigationItems}>
		<NavigationItem linkTarget="/" exact linkTitle="Build a Burger" />
		<NavigationItem linkTarget="/orders" linkTitle="Orders" />
	</ul>
);

export default navigationItems;
