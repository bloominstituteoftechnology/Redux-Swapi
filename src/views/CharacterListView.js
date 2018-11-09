import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
// import actions
import { fetchChars } from "../actions/index";
import { getChars } from "../actions/index"; 
class CharacterListView extends React.Component {

  constructor(props){
    super(props)
  }
 

  componentDidMount() {

  if(this.props.length === 0) {

    this.props.fetchChars() 
  }

  this.props.getChars();


  }

  render() {
    if (this.props.fetching === true) {
      // return something here to indicate that you are fetching data
      return (<h1>...Fetching CharacterList</h1>)
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

const mapStateToProps = (state) => {

  return {
    characters: state.characters,
    fetching: state.fetching,
  }
}

export default connect( mapStateToProps, {getChars: getChars, fetchChars: fetchChars})(CharacterListView);
