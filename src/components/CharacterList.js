import React from "react";
import {connect} from 'react-redux';//connect
import {getCharacters} from '../actions/';
import Character from "./Character";

 class CharacterList extends React.Component{
   constructor(props){
     super(props);
   }


componentDidMount(){
  //call action
  this.props.getCharacters();
}

render() {
  console.log(this.props)
  if (this.props.fetching) {
    <div>Fetching...</div>
  }
  return (
    <div className="CharactersList_wrapper">
      <CharacterList characters={this.props.characters} />;
    </div>
  );
}
}

const mstp = function mapStateToProps(state) {
  console.log(state);
  return {
    characters: state.characters,
    isFetching: state.fetching
    
  };
}

export default connect (mstp)(CharacterList)