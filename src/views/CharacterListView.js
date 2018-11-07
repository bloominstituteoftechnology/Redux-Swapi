import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetching } from "../actions";

class CharacterListView extends React.Component {
  
  componentDidMount() {
    // call our action
    this.props.fetching();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (
        <h2>Hold on we are loading the characters</h2>
      );
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

const mapStateToProps = state => (
  {
    characters: state.characters,
    fetching: state.fetching
  }
);

export default connect(mapStateToProps, { fetching })(CharacterListView);
