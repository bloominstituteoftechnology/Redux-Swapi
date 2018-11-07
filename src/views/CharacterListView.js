import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import {fetch} from '../actions';                   // added


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
      return <h2> Loading up characters ... </h2>

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

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  }

};


export default connect(
  /* null mapStateToProps replaces null here */
  mapStateToProps,
  {
    fetch
  }
)(CharacterListView);
