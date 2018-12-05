import React from "react";
import { connect } from "react-redux";
import Character from "./Character";
import { fetchSWAPI } from "../actions/index";

class CharacterList extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchSWAPI();
  }

  render() {
    return (
      <ul>
        {this.props.characters.map(character => {
          return <Character key={character.name} character={character} />
        })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  };
}

export default connect(
  mapStateToProps,
  { fetchSWAPI }
)(CharacterList);
