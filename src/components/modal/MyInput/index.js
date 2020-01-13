import React from "react";

export default function Input({
	placeholder,
	errorTitle,
	name,
	isRequired,
	onChangeInput,
	formData,
	checkInput
}) {
	return (
		<div className="input-wrapper">
			<input
				type="text"
				name={name}
				onChange={onChangeInput}
				value={formData[name] ? formData[name] : ""}
				onBlur={e => checkInput(e.target)}
			/>
			<span className="placeholder">
				{placeholder}
				{isRequired && <span className="required"> *</span>}
			</span>
			<span className="error-span">{errorTitle}</span>
		</div>
	);
}
