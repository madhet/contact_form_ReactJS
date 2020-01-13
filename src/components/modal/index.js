import React, { Component } from "react";
import Input from "./MyInput";
import TextArea from "./TextArea";

export default class Modal extends Component {
	state = {
		formData: {}
	};

	comments = [];
	inputs = [];
	validData = {
		name: /\w/i,
		email: /\w+@\w+.\w+/i,
		comment: /.+/
	};

	valueIsValid = (name, value) => {
		if (name === "name") {
			if (value.search(/\w/i) === -1) return false;
		} else if (name === "email") {
			if (value.search(/\w+@\w+.\w+/i) === -1) return false;
		} else if (name === "comment") {
			if (!value) return false;
		}
		return true;
	};

	checkInput = input => {
		input.className = this.valueIsValid(input.name, input.value)
			? ""
			: "error";
	};

	onChangeInput = event => {
		if (this.inputs.indexOf(event.target) === -1) {
			this.inputs.push(event.target);
		}
		this.setState({
			formData: {
				...this.state.formData,
				[event.target.name]: event.target.value
			}
		});
	};

	submitForm = event => {
		event.preventDefault();
		this.comments.push(this.state.formData);
		this.setState({ formData: {} });
	};

	render() {
		const { formData } = this.state;
		let buttonEnabled = false;
		if (this.inputs.length === 3) {
			buttonEnabled = this.inputs.every(item =>
				this.valueIsValid(item.name, item.value)
			);
		}
		// let validByObject = 1;
		// for (let key in this.validData) {
		// 	validByObject *=
		// 		key in formData &&
		// 		formData[key].search(this.validData[key]) !== -1
		// 			? 1
		// 			: 0;
		// }
		return (
			<div className="modal-wrapper">
				<form onSubmit={this.submitForm} className="form-wrapper">
					<h1>Contact us</h1>
					<h4>Leave a message</h4>
					<div className="row-for-input">
						<Input
							placeholder="Name"
							errorTitle="Enter correct name"
							isRequired={true}
							onChangeInput={this.onChangeInput}
							name="name"
							formData={formData}
							checkInput={this.checkInput}
						/>
						<Input
							placeholder="Email"
							errorTitle="Enter correct email"
							isRequired={true}
							onChangeInput={this.onChangeInput}
							name="email"
							formData={formData}
							checkInput={this.checkInput}
						/>
					</div>
					<Input
						placeholder="Subject"
						errorTitle=""
						onChangeInput={this.onChangeInput}
						name="subject"
						formData={formData}
						checkInput={this.checkInput}
					/>
					<TextArea
						placeholder="Your comment"
						errorTitle="Enter comment"
						isRequired={true}
						name="comment"
						onChangeInput={this.onChangeInput}
						formData={formData}
						checkInput={this.checkInput}
					/>
					<button disabled={buttonEnabled ? false : true}>
						Send message
					</button>
				</form>
			</div>
		);
	}
}