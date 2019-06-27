import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getChars } from '../actions/index'

class CharacterListView extends React.Component {


  componentDidMount() {
    // call our action
    this.props.getChars();
  }

  render() {
    { this.props.fetching ? <h2>Loading Characters...</h2> : null }
    // return something here to indicate that you are fetching data
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching,
  error: state.charsReducer.error
})
export default connect(
  mapStateToProps,
  {
    getChars
  }

)(CharacterListView);
