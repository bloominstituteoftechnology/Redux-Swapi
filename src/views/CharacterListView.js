import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchSWAPI } from "../actions";

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.fetchSWAPI();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <h2>Fetching Star Wars Character Data...</h2>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.chars} />;
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  return {
    chars: state.charsReducer.chars,
    fetching: state.charsReducer.fetching
  };
};

export default connect(
  mapStateToProps,
  { fetchSWAPI }
)(CharacterListView);
