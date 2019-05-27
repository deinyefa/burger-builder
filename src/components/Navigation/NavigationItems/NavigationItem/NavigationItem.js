import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import NaviationItemStyles from "./NavigationItem.module.css";

const navigationItem = props => (
	<li className={NaviationItemStyles.NavigationItem}>
		<NavLink
            to={props.linkTarget}
            exact={props.exact}
			activeClassName={NaviationItemStyles.active}>
			{props.linkTitle}
		</NavLink>
	</li>
);

navigationItem.propTypes = {
	linkTitle: PropTypes.string.isRequired,
	linkTarget: PropTypes.string.isRequired,
};

export default navigationItem;
