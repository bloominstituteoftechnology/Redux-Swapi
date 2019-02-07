import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchData } from '../actions';

class CharacterListView extends React.Component {

  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    if (this.props.fetching) {
      return(
        <h1>"Loading"</h1>
      )
    }
    return (
      
      <div className="CharactersList_wrapper">
     
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mstp = state => {
  console.log(state)
  return {
      characters: state.charsReducer.characters,
      fetching: state.charsReducer.isFetching
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(mstp, { fetchData })(CharacterListView);
