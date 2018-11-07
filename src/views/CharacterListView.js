import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import {FETCHING, SUCCESS, FAILURE, fetchCharacters} from "../actions"

class CharacterListView extends React.Component {
  constructor(){
    super()
    this.state = {
      page: 1,
    }
  }
  componentDidMount() {
    return this.props.fetchCharacters(this.state.page);
  }
  prevPage = () => {
    if(this.state.page > 1){
      this.props.fetchCharacters(this.state.page - 1)
      this.setState(state => ({
        page: state.page - 1
      }))
    }
  }
  nextPage = () => {
    if(this.state.page < 9){
      this.props.fetchCharacters(this.state.page + 1)
      this.setState(state => ({
        page: state.page + 1
      }))
    }
  }
  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return(<h2>Loading Character List...</h2>)
    }
    return (
      <div className="CharactersList_wrapper">
        <h2> StarWars Characters </h2>
        <h3>Page {this.state.page}</h3>
        <CharacterList characters={this.props.characters} />;
        <button onClick={() => this.prevPage()}>Previous</button>
        <button onClick={() => this.nextPage()}>Next</button>
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state

const mapState = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
  }
}
// the characters and the fetching boolean
export default connect(mapState,
 /* mapStateToProps replaces null here */
  {
    /* action creators go here */
    FETCHING, SUCCESS, FAILURE, fetchCharacters
  }
)(CharacterListView);
