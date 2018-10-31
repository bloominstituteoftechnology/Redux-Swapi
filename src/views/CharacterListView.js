import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
// import actions
import { fetchChar } from '../actions/index.js'

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // call our action
    this.props.fetchChar();
  }

  render() {
    if (this.props.fetch) {
      // return something here to indicate that you are fetching data
      return <h3>fetching your characters...</h3>
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
  console.log(state);
  return {
    characters: state.charsReducer.characters,
    fetch: state.charsReducer.isFetching,
    error: state.charsReducer.error,
  }
}

export default connect(
  mapStateToProps, /* mapStateToProps replaces null here */
  {
    fetchChar /* action creators go here */
  }
)(CharacterListView);
