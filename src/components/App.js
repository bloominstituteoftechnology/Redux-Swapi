import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import { fetchChars } from '../actions';

class App extends Component {
	componentDidMount() {
		// call our action
		this.props.fetchChars();
	}
	render() {
		return (
			<div className="App">
				{this.props.fetching ? (
					<img
						src={
							'https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/bac2c4c7f9ba55c08102fd886a5ddb55/large.png'
						}
						className="App-logo"
						alt="logo"
					/>
				) : (
					<ul>
						{this.props.chars.map(char => {
							return <li key={char.name}>{char.name}</li>;
						})}
					</ul>
				)}
				{this.props.error ? <p>{this.props.error}</p> : null}
			</div>
		);
	}
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
const mapStateToProps = state => {
	return {
		chars: state.charsReducer.chars,
		fetching: state.charsReducer.fetching,
		error: state.charsReducer.error
	};
};

export default connect(
	mapStateToProps,
	{ fetchChars }
)(App);
