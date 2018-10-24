import React from "react";
import { connect } from "react-redux";
import { fetchCHARS } from "../actions/index"

import CharacterList from "../components/CharacterList";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchCHARS();
    // call our action
  }

  render() {
    if (this.props.fetching) {
      return (
        <h1>Please wait, fetching Characters</h1>
      );
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
    chars: state.chars,
    isFetching: state.isFetching // is our data currently being fetched???
  };
};
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  { fetchCHARS }
)(CharacterListView);
