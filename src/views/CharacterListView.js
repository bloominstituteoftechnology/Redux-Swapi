import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
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
    console.log('PROPS:')
    console.log(this.props);
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (<h2>Loading Characters...</h2>)
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
const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error
  }
}

export default connect( mapStateToProps, { fetchData: fetchData } )(CharacterListView);
