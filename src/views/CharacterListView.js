import React from "react";
import { connect } from "react-redux";
import { fetch } from "../actions";

import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetch();
  }

  render() {
      console.log(this.props.fetching)
    if (this.props.fetching === true) {
       return <h1>LOADING</h1>
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
const mapStateToProps   =   state   =>  {
    return {
        characters: state.chars.characters,
        fetching: state.chars.fetching,
        error: state.chars.error
    }
}
export default connect(
  mapStateToProps,
  { fetch }
)(CharacterListView);
