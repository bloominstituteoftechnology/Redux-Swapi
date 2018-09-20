import React, { Component } from "react";
import { connect } from "react-redux";

import logo from "../logo.svg";
import "../styles/App.css";
// pull in actions from action/index
import { fetchingChar } from "../actions";

class App extends Component {
	componentDidMount() {
		// call our action
		this.props.fetchingChar();
	}
	render() {
		return (
			<div className="App">
				{this.props.fetching ? (
					<img src={logo} className="App-logo" alt="logo" />
				) : (
					<ul>
						{this.props.chars.map(char => {
							return <li key={char.name}>{char.name}</li>;
						})}
					</ul>
				)}
				{this.props.error !== "" ? <h4>{this.props.error}</h4> : null}
			</div>
		);
	}
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
const mapStateToProps = state => {
	{
		console.log(state);
	}
	return {
		chars: state.charsReducer.char,
		fetching: state.charsReducer.fetching
	};
};

export default connect(
	mapStateToProps,
	{
		fetchingChar
	}
)(App);
