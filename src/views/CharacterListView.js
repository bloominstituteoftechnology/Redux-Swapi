import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";

// import actions
import { getData } from '../actions';
import { charsReducer } from "../reducers/starWarsReducer";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    // call our action
    this.props.getData();
  }
    
  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
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
const mapStateToProps = (state) => {
  return {
    characters: state.charsReducer.characters
  }
}


export default connect(mapStateToProps, { getData })(CharacterListView);
