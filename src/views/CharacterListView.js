import React from "react";
import { connect } from "react-redux";
import { getCharacters } from '../actions'
import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  

  componentDidMount() {
    // call our action
    this.props.getCharacters()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (
        <div>
          <p className='fetching'>Loading Characters...</p>
        </div>
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}


function mapStateToProps(state) {
  console.log("characters", state.charsReducer.characters)
  return{
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { getCharacters }
   /* mapStateToProps replaces null here */
)(CharacterListView);
