import React from "react";
import { connect } from 'react-redux';
import { fetchPeople } from '../actions';
import Character from "./Character";

class CharacterList extends React.Component  {
 
  componentDidMount() {
    this.props.fetchPeople();
  }

  render() {
    console.log('Char List props: ', this.props.characters);
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
  console.log(state);
  return {
    characters: state.characters.characters,
    isFetching: state.characters.fetching,
    
  };
}

export default connect(
  // HOC ==> Extend functionality of the passed in component
  mapStateToProps,
  { fetchPeople } // same as addTodo: addTodo
)(CharacterList);


