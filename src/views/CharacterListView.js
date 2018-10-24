import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
import { fetchChars } from '../actions'

class CharacterListView extends React.Component {

  componentDidMount() {
    this.props.fetchChars();
  }

  render() {
    console.log(`render ${this.props.characters}`)
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (
      <h1>{this.props.isFetching}</h1>
      )
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
  console.log(state.charsReducer)
  return {
    characters: state.charsReducer.characters,
    isFetching: state.charsReducer.isFetching,
    error: state.charsReducer.error
  }
}

export default connect(
  mapStateToProps,
  {
    fetchChars
  }
)(CharacterListView);
