import {React, Component} from "react";
import {connect} from 'react-redux';
import getSwapi from '../actions/index.js';


import Character from "./Character";

class CharacterList extends Component {
  componentDidMount(){
    this.props.getSwapi();
  };
  render(){
    return (
      <ul>
        {this.props.chars.map(character => {
          return <Character key={character.name} character={character} />;
        })}
      </ul>
    );
  }
  
};

const mapStateToProps = state =>{
  return{
    fetching:state.fetching,
    chars: state.chars,
    error: state.errorMessage
  }
}


export default connect(mapStateToProps, {getSwapi})(CharacterList);
