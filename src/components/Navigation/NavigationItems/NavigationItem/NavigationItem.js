import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import NaviationItemStyles from "./NavigationItem.module.css";

const navigationItem = (props) => (
  <li className={NaviationItemStyles.NavigationItem}>
    <NavLink
      to={props.linkTarget}
      exact={props.exact}
      activeClassName={NaviationItemStyles.active}
      onClick={props.onClick}
    >
      {props.linkTitle}
    </NavLink>
  </li>
);

navigationItem.propTypes = {
  linkTitle: PropTypes.string.isRequired,
  linkTarget: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default navigationItem;
