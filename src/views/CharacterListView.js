import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getData } from '../actions';

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // call our action
    this.props.getData();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <h2>Loading ...</h2>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
const mapStateToProps = state => {
    return {
      characters: state.charsReducer.characters,
      error: state.charsReducer.error,
      loading: state.charsReducer.loading
      
    }
}
// the characters and the fetching boolean
export default connect(mapStateToProps
   /* mapStateToProps replaces null here */,

  {
    /* action creators go here */
    getData
  }
)(CharacterListView);
