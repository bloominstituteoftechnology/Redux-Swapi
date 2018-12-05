import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetch} from '../actions';
// import actions

class CharacterListView extends React.Component {


  componentDidMount() {
    // call our action
    this.props.fetch();
  }
  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStatetoProps = state =>{
  return {
    characters: state.charsReducer.characters,
    loading: state.charsReducer.loading,
  }
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStatetoProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */ fetch
  }
)(CharacterListView);
