import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
import { fetchCharacters } from "../actions";

// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    // call our action
    this.props.fetchCharacters();
  }

  render() {
    console.log(this.props);
    if (this.props.isFetching) {
      return <h2>loading. . .</h2>;
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    isFetching: state.charsReducer.isFetching
  };
};

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { fetchCharacters }
)(CharacterListView);
