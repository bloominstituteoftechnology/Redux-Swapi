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
      return (
        <div className="CharactersList_wrapper">
          {this.props.characters.length === 0 ? (
            <h2>Hold on, we're loading the characters</h2>
          ) : null}
          <CharacterList characters={this.props.characters} />;
        </div>
      );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => (
  {
    characters: state.charsReducer.characters
  }
);

export default connect(mapStateToProps, { fetching })(CharacterListView);
