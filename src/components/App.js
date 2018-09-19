// React
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Dependencies
import PropTypes from 'prop-types';

// Actions
import { fetchSwapi } from '../actions';

// Styles
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';

// Assets
import logo from '../logo.svg';

class App extends Component {
	componentDidMount() {
		this.props.fetchSwapi();
	}

	render() {
		return (
			<div className = 'App'>
				{ this.props.fetching ? (
					<img src = { logo } className = 'App-logo' alt = 'logo' />
				) : (
					<ul>
						{ this.props.chars.map((char, i) => {
							return (
								<div key = { i } className = 'char-card-div'>
									<Card className = 'char-card'>
										<CardHeader tag="h3">{ char.name }</CardHeader>
										
										<CardBody>
											<CardTitle>Born { char.birth_year }</CardTitle>

											<CardText>Height: { char.height }</CardText>
											<CardText>Mass: { char.mass }</CardText>
											<CardText>Hair color: { char.hair_color }</CardText>
											<CardText>Skin color: { char.skin_color }</CardText>
										</CardBody>
									</Card>
								</div>
							);
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
