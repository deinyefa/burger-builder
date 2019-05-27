import React from "react";
import PropTypes from "prop-types";

import InputStyles from "./Input.module.css";

const input = props => {
    let inputElement = null;
    const inputClasses = [InputStyles.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(InputStyles.Invalid)
    }

	switch (props.elementType) {
		case "input":
			inputElement = (
				<input
					className={inputClasses.join(' ')}
					{...props.elementConfig}
					value={props.value}
					onChange={props.changed}
				/>
			);
			break;
		case "textarea":
			inputElement = (
				<textarea
					className={inputClasses.join(' ')}
					{...props.elementConfig}
					value={props.value}
					onChange={props.changed}
				/>
			);
			break;
		case "select":
			inputElement = (
				<select
					className={inputClasses.join(' ')}
					value={props.value}
					onChange={props.changed}>
					{props.elementConfig.options.map(option => (
						<option
							value={option.value}
							// defaultValue={option.value}
							key={option.value}>
							{option.displayValue}
						</option>
					))}
				</select>
			);
			break;
		default:
			inputElement = (
				<input
					className={inputClasses.join(' ')}
					{...props.elementConfig}
					value={props.value}
					onChange={props.changed}
				/>
			);
	}

	return (
		<div className={InputStyles.Input}>
			<label className={InputStyles.Label}>{props.label}</label>
			{inputElement}
		</div>
	);
};

input.propTypes = {
	elementType: PropTypes.string.isRequired,
	elementConfig: PropTypes.object,
	label: PropTypes.string,
	value: PropTypes.string,
};

export default input;
