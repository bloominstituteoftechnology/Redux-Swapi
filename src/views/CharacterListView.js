import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacters } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    if (this.props.fetching) {
      return <div>Loading...</div>;
    }

    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
const mapStateToProps = ({ charsReducer } ) => {
  return { characters: charsReducer.characters, fetching: charsReducer.fetching }
}
// the characters and the fetching boolean
export default connect(mapStateToProps, { getCharacters })(CharacterListView);
