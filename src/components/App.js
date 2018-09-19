// React
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Dependencies
import PropTypes from 'prop-types';

// Actions
import { fetchSwapi } from '../actions';

// Styles and Assets
import '../styles/App.css';
import logo from '../logo.svg';

class App extends Component {
	componentDidMount() {
		this.props.fetchSwapi();
	}

	render() {
		console.log('app props', this.props)
		return (
			<div className = 'App'>
				{ this.props.fetching ? (
					<img src = { logo } className = 'App-logo' alt = 'logo' />
				) : (
					<ul>
						{ this.props.chars.map(char => {
							return <li key = { char.name }>{ char.name }</li>;
						}) }
					</ul>
				)}

				{ this.props.error !== '' ? <h4>{ this.props.error }</h4> : null}
			</div>
		);
	}
}

App.propTypes = {
	chars: PropTypes.arrayOf(PropTypes.shape({
		birth_year: PropTypes.string,
		created: PropTypes.string,
		edited: PropTypes.string,
		eye_color: PropTypes.string,
		films: PropTypes.arrayOf(PropTypes.string),
		gender: PropTypes.string,
		hair_color: PropTypes.string,
		height: PropTypes.string,
		homeworld: PropTypes.string,
		mass: PropTypes.string,
		name: PropTypes.string,
		skin_color: PropTypes.string,
		species: PropTypes.arrayOf(PropTypes.string),
		starships: PropTypes.arrayOf(PropTypes.string),
		url: PropTypes.string,
		vehicles: PropTypes.arrayOf(PropTypes.string)
	})),
	error: PropTypes.string,
	fetchSwapi: PropTypes.func,
	fetching: PropTypes.bool
}

const mapStateToProps = state => {
	return {
		chars: state.charsReducer.chars,
		fetching: state.charsReducer.fetching,
		error: state.charsReducer.error
	}
};

export default connect(mapStateToProps, {
	fetchSwapi
})(App);
