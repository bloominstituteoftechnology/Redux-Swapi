import React from "react";
import { connect } from "react-redux";
import { fetchChars } from '../actions'
import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {
   this.props.fetchChars();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
     return  <h1>The Characters are on their way....they will be here shortly.</h1>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    isFetching: state.charsReducer.isFetching
  }
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
 mapStateToProps,
  {
    fetchChars
  }
)(CharacterListView);
