import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchData } from "../actions";
// console.log(fetchData);
class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchData; // call our action
  }

  render() {
    if (this.props.fetching) {
      <h1>loading character data...</h1>;
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("mtp", state);
  return {
    characters: state.charsReducer.characters,
    dataLoaded: state.charsReducer.dataLoaded,
    dataLoading: state.charsReducer.dataLoading
  };
};
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    fetchData /* action creators go here */
  }
)(CharacterListView);
