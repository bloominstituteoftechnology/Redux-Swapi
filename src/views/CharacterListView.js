import React from "react";
import { connect } from "react-redux";
import { FETCHING, SUCCESS, FAILURE, fetchChar } from '../actions';
import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    return setTimeout(this.props.fetchChar(), 8000)
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (<h3>Loading Characters...</h3>)
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  }
}

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    FETCHING, SUCCESS, FAILURE, fetchChar
  }
)(CharacterListView);