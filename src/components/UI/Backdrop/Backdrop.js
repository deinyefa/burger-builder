import React from "react";
import PropTypes from "prop-types";

import BackdropStyles from "./Backdrop.module.css";

const backdrop = props =>
	props.show ? (
		<div className={BackdropStyles.Backdrop} onClick={props.clicked} />
	) : null;

backdrop.propTypes = {
	show: PropTypes.bool,
	clicked: PropTypes.func,
};

export default backdrop;
