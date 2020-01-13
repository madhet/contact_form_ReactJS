import React from "react";

export default function TextArea({
	placeholder,
	errorTitle,
	name,
	isRequired,
	onChangeInput,
	formData,
	checkInput
}) {
	return (
		<div className="textarea-wrapper">
			<textarea
				name={name}
				cols="30"
				rows="7"
				value={formData[name] ? formData[name] : ""}
				onChange={onChangeInput}
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
