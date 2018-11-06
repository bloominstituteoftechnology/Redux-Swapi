import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import {fetch} from "../actions/index";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetch();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <div>Loading Data...</div>
    }

    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
const mapStateToProps = (state)=>{
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  }
}
// the characters and the fetching boolean
export default connect(mapStateToProps, {fetch})(CharacterListView);
