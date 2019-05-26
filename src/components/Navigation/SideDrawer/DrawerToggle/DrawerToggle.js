import React from "react";

import DrawerToggleStyles from "./DrawerToggle.module.css";

const drawerToggle = props => (
	<div
		className={DrawerToggleStyles.DrawerToggle}
		onClick={props.toggleDrawer}>
		<div />
		<div />
		<div />
	</div>
);

export default drawerToggle;
