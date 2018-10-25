import React from "react";
import { connect } from "react-redux";
import "../components/Char.css";

import { CharacterList } from "../components";
// import actions
import { fetchChars } from "../actions/index";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action

    this.props.fetchChars();
    console.log(this.props);
  }

  render() {
    if (this.props.isFetching) {
      // return something here to indicate that you are fetching data
      return <h1>Loading Data</h1>;
    }
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
  console.log(state);
  return {
    characters: state.chars.characters,
    error: state.chars.error,
    isFetching: state.chars.isFetching
  };
};

export default connect(
  mapStateToProps,
  {
    fetchChars
  }
)(CharacterListView);
