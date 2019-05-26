import React, { Fragment } from "react";

import SideDrawerStyles from "./SideDrawer.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = props => {
	let attachedClasses = [SideDrawerStyles.SideDrawer, SideDrawerStyles.Close];

	if (props.showSideDrawer) {
		attachedClasses = [SideDrawerStyles.SideDrawer, SideDrawerStyles.Open];
	}

	return (
		<Fragment>
			<Backdrop
				show={props.showSideDrawer}
				clicked={props.toggleSideDrawer}
			/>
			<div className={attachedClasses.join(" ")}>
				<Logo />
				<nav role="navigation">
					<NavigationItems />
				</nav>
			</div>
		</Fragment>
	);
};

export default sideDrawer;
