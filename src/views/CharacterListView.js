import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { CharacterList } from "../components";
import { getChars } from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getChars();
  }

  render() {
    if (this.props.isLoading) {
      <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />;
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
    isLoading: state.charsReducer.isLoading,
    characters: state.charsReducer.characters
  };
};
export default connect(
  mapStateToProps,
  {
    getChars
  }
)(CharacterListView);
