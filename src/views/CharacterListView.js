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
      return <div>Loading...</div>
    }

    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  }
}
export default connect(mapStateToProps, {fetch})(CharacterListView);
