import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { requestData } from '../actions';
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.requestData()
  }

  render() {
    if (this.props.fetching) {
      return <h1>Characters Loading</h1>
    } else if (this.props.error){
      return <h1>There was an error loading the characters. Please refresh & try again.</h1>
    } else {
      return (
        <div className="CharactersList_wrapper">
          <CharacterList characters={this.props.characters} />;
        </div>
      );
    }
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
  return {
    fetching: state.charsReducer.fetching,
    characters: state.charsReducer.characters,
    error: state.charsReducer.error
  }
}
export default connect(
  mapStateToProps,
  {
    requestData
  }
)(CharacterListView);
