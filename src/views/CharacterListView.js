import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
//import { addTodo, fetchDoggos } from '../store/actions';
import { fetchStarWars } from '../actions';
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log(this.props)
    this.props.fetchStarWars();

    // call our action
  }

  render() {
    console.log(this.props, 'here')
    if (this.props.fetching) {
      return <h1>loading...</h1>  // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.charsReducer, 'maptoprops')
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    fetchStarWars
    /* action creators go here */
  }
)(CharacterListView);
