import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchChars } from "../actions/";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchChars();
  }

  render() {
    if (this.props.isFetching) {
      return <h2>Loading Star Wars Characters</h2>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  return {
    isFetching: state.charsReducer.isFetching,
    characters: state.charsReducer.characters
  };
};

export default connect(
  mapStateToProps,
  {
    fetchChars
  }
)(CharacterListView);
