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
      console.log(this.props.fetching)
      return (
        <div className="CharactersList_wrapper">
          {this.props.fetching ? (
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
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  }
);

export default connect(mapStateToProps, { fetching })(CharacterListView);
