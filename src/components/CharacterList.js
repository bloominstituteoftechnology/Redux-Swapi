import React from "react";
import { connect } from 'react-redux';
import { fetchCharacters } from '../actions';

import Character from "./Character";

class CharacterList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCharacters();
  }

  render(){
    return (
      <ul>
        {this.props.characters.map(character => {
          return <Character key={character.name} character={character} />;
        })}
      </ul>
    );
  }
};

function mapStateToProps(state) {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
  }
}

export default connect(mapStateToProps, { fetchCharacters })(CharacterList);
