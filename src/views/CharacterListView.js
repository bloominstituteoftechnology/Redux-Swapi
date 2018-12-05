import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions DONE
import { fetchCharacters } from "../actions";

class CharacterListView extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
    // call our action DONE
    
    this.props.fetchCharacters();
	}

	render() {
    //console.log(this.props)
		if (this.props.fetching) {
			// return something here to indicate that you are fetching data DONE
			return (
				<div>
					We are contacting a GALAXY LONG AGO AND FAR AWAY HOLD ON FOR
					A SECOND
				</div>
			);
		}
		return (
			<div className='CharactersList_wrapper'>
				<CharacterList characters={this.props.characters} />;
			</div>
		);
	}
}

// our mapStateToProps needs to have two properties inherited from state DONE
function mapStateToProps(state) {
  console.log(state)
  return {
		characters: state.charsReducer.characters,
		fetching: state.charsReducer.fetching
	};
}
// the characters and the fetching boolean DONE

export default connect(
	mapStateToProps /* mapStateToProps replaces null here DONE */,
	{
		/* action creators go here DONE*/
		fetchCharacters
	}
)(CharacterListView);
