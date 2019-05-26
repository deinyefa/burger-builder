import React from "react";
import PropTypes from "prop-types";

import ButtonStyles from "./Button.module.css";

const button = props => (
	<button
		onClick={props.clicked}
		className={[ButtonStyles.Button, ButtonStyles[props.btnType]].join(
			" "
		)}>
		{props.children}
	</button>
);

button.propTypes = {
	btnType: PropTypes.string.isRequired,
	clicked: PropTypes.func,
};

export default button;
