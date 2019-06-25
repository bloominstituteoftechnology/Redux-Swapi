import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetch_chars } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
    //that's right, no state here. wow.
  }

  componentDidMount() {
    this.props.fetch_chars();
  }

  render() {
    if (this.props.fetching) {
     return  <h2>Hold your horses, we are loading.</h2>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
    // do i need the error property on props too? that seems like a strange omission.


  }


};
export default connect(
  mapStateToProps,
  { fetch_chars }
)(CharacterListView);
