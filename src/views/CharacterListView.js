import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchChars } from '../actions';

class CharacterListView extends React.Component {


  componentDidMount() {
    // call our action
    this.props.fetchChars();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <h2>Fetching Star Wars characters</h2>;
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
    characters: state.starWars.characters,
    error: state.starWars.error,
    fetching: state.starWars.fetching,
    fetched: state.starWars.fetched
};
}
export default connect(
  /* mapStateToProps replaces null here */mapStateToProps,
  {
    /* action creators go here */fetchChars
  }
)(CharacterListView);
