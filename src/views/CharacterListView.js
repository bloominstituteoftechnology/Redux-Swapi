import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import {fetchingData} from '../actions';

class CharacterListView extends React.Component {

  componentDidMount() {
    // call our action
    this.props.fetchingData()
  }

  render() {
    console.log(this.props);
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
     return <h2>Please Wait While Data is Loaded</h2>
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
const mapStateToProps = state => ({
  characters: state.characters.characters,
  fetching : state.characters.fetching,
})

export default connect(
  mapStateToProps,
  {
    fetchingData
  }
)(CharacterListView);
