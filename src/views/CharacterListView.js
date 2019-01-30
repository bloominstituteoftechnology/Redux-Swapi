import React from "react";
import { connect } from "react-redux";

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
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        {/* <CharacterList characters={this.props.characters} /> */}
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    characters: state.characters
  };
};
export default connect(
  mapStateToProps,
  {
    getChars
  }
)(CharacterListView);
