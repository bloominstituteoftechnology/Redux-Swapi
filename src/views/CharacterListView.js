import React from 'react';
import { connect } from 'react-redux';
import { GlobalStyle, Div, H1 } from '../styles/styles';
import { CharacterList } from '../components';
import { fetchCharacters } from '../actions';

class CharacterListView extends React.Component {
	componentDidMount() {
		this.props.fetchCharacters();
	}

	render() {
		if (this.props.requesting === true) {
			return <H1> Data is being fetched...</H1>;
		}
		return (
			<React.Fragment>
				<GlobalStyle />
				<Div>
					<CharacterList characters={this.props.characters} />;
				</Div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	characters: state.charsReducer.characters,
	requesting: state.charsReducer.requesting
});
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
	mapStateToProps,
	{
		fetchCharacters
	}
)(CharacterListView);
