import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchingStarwars } from '../actions/index'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchingStarwars();
    // call our action
  }

  render() {
    if (this.props.fetching) {
       <h1>Loading Starwars Characters...</h1>;
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps=state=>{
  console.log(state);
  return{
    characters: state.charsReducer.starwarsChar,
    error: state.charsReducer.error,
    fetching: state.charsReducer.fetching,
    
  };

};

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    fetchingStarwars
  }
)(CharacterListView);
