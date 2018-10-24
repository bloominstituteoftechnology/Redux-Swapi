import React from "react";
import { connect } from "react-redux";

import CharacterList from "../components/CharacterList";
import { fetchCharacters } from "../actions";
// import actions

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // call our action
    this.props.fetchCharacters();
  }

  render() {
    if (this.props.fetching) {
      return <h1>FETCHING DATA</h1>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  return {
    characters: state.characters,
    error: state.error,
    isFetching: state.isFetching
  }
}
export default connect(
  mapStateToProps,
  { fetchCharacters }
)(CharacterListView);
