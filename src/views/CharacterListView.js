import React from 'react';
import { connect } from 'react-redux';

import { CharacterList } from '../components';
import { getCharacters } from '../actions/index';
// import actions

class CharacterListView extends React.Component {
	// constructor() {
	// 	super();
	// }

	componentDidMount() {
		// call our action
		this.props.getCharacters();
	}

	render() {
		if (this.props.fetching) {
			return <h1>Loading Data</h1>;
			// return something here to indicate that you are fetching data
		}
		return (
			<div className="CharactersList_wrapper">
				<CharacterList characters={this.props.characters} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		characters: state.charsReducer.characters,
		fetching: state.charsReducer.fetching,
		error: state.charsReducer.error
	};
};
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(mapStateToProps, { getCharacters })(CharacterListView);
