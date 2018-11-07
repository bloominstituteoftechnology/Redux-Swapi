import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchChars } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchChars();
  }

  render() {
    if (this.props.fetching) {

      return (<h1>Searching a Galaxay far far away...</h1>)
    }else{
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }}
}

const mapStateToProps = state =>{
  return{
    fetching: state.charsReducer.fetching,
    characters: state.charsReducer.characters
  }
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
 mapStateToProps,
  {
    fetchChars
  }
)(CharacterListView);
