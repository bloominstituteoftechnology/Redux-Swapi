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
    if (!this.props.fetching) {
      return (
        <React.Fragment>
          <h1 className='title'>Star Wars Characters</h1>
          <div className='characters-container'>
              <ul>
              {this.props.characters.map(character => {
                return <Character key={character.name} character={character} />;
              })}
            </ul>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <div className='loading-container'>
          <h2>Loading</h2>
          <i className="fas fa-spinner"></i>
        </div>
      ); 
    }
  }
};

function mapStateToProps(state) {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
  }
}

export default connect(mapStateToProps, { fetchCharacters })(CharacterList);
