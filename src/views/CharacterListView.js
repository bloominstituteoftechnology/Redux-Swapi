import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetching();
  }

  render() {
    if (this.props.fetching) {
      return <h2> I am fetching some data...</h2>;
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
    characters: state.charsReducer.characters,
    fetch: state.charsReducer.fetching,
    error: state.charsReducer.error
  };
};
export default connect(
  mapStateToProps,
  {
    fetching
  }
)(CharacterListView);
