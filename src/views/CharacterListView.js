import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchData } from '../actions'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    console.log("CDM")
    this.props.fetchData();
  }

  render() {
    if(this.props.error){
      return <h1>{this.props.error}</h1>
    }
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <p>Loading Data...</p>
    }
    console.log("characterListVIEW props :" , this.props)
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    fetching: state.charsReducer.isFetching
  };
};

export default connect(
  mapStateToProps,
  { fetchData }
)(CharacterListView);
