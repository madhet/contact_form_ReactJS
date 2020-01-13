import React, { Component } from "react";
import "./style.css";
import Modal from "./components/modal";

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<Modal />
			</div>
		);
	}
}
