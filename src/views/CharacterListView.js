import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
import { fetchData } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
    
  }

  componentDidMount() {
    // call our action
    this.props.fetchData();
  }

  render() {
    if (this.props.fetching) {
      return <h1>Loading  Star Wars Data... Please Wait.</h1>
    }
    //   // return something here to indicate that you are fetching data
    // }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}


function mapStateToProps(state) {
  console.log(state);
  console.log(state.characters);
  console.log(state.fetching);
  return{
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
  }
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    fetchData /* action creators go here */
  }
)(CharacterListView);
