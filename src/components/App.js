// React
import React, { Component } from 'react';
import { connect } from 'react-redux';

// pull in actions from action/index
// Actions
import { fetchSwapi } from '../actions';

// Styles and Assets
import '../styles/App.css';
import logo from '../logo.svg';

class App extends Component {
	componentDidMount() {
		// call our action
		this.props.fetchSwapi();
	}

	render() {
		console.log('app props', this.props)
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

				{this.props.error !== '' ? <h4>{this.props.error}</h4> : null}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		chars: state.charsReducer.chars,
		error: state.charsReducer.error
	}
};

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, {
	fetchSwapi
})(App);
