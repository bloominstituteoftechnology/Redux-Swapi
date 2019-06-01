import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getSwapi } from '../actions/index'
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getSwapi();
    // call our action
  }

  render() {
    if (this.props.fetching) {
      return <div>Loading</div>; // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
      {console.log(typeof this.props.characters)}
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}
const mstp = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.loading
  };
};
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mstp,
  {
    getSwapi
  }
)(CharacterListView);
