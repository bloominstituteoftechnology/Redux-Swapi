import React from "react";
import { connect } from "react-redux";
import { getCharacters } from "../actions"
import { CharacterList } from "../components";
/* import GET_CHARACTERS from  "../actions";
import GET_CHARACTERS_SUCCESS from  "../actions";
import GET_CHARACTERS_FAILURE from  "../actions"; */
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getCharacters();
    console.log("componentdid mount charlistview")
  }

  render() {
    if (this.props.fetching) {
     return (
      // return something here to indicate that you are fetching data
     <div>
      <h2 className="loading">Loading Characters, please wait... If this message doesnt go away, please try again.</h2>
     </div> )
    }
    return (
      <div className="CharactersList_wrapper">
      <h1 className="title">Star Wars Character List</h1>
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("maptostateprops", state);
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    fetching: state.charsReducer.fetching
  };
};
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { getCharacters }
)(CharacterListView);
/* action creators go here */





    