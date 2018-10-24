import React from 'react';
import { connect } from 'react-redux';

import { CharacterList } from '../components';
import { fetchChars } from '../actions';

class CharacterListView extends React.Component {
	componentDidMount() {
		this.props.fetchChars();
	}

	render() {
		if (this.props.isFetching) {
			return (
				<div className="CharactersList_wrapper">
					<h1>Loading..</h1>
				</div>
			);
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
	console.log(state);
	return {
		characters: state.charsReducer.characters,
		isFetching: state.isFetching
	};
};

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(mapStateToProps, {
	fetchChars
})(CharacterListView);
