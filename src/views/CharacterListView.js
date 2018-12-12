import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getChars } from "../actions";


class CharacterListView extends React.Component {
  componentDidMount() {
    return this.props.getChars();
  }

  render() {
    if (this.props.fetching) {
      return <h2>Loading Star Wars Characters...</h2>;
    }
    return (
      <div className="CharactersList_wrapper">
         <CharacterList characters={this.props.chars} />;
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    chars: state.charsReducer.chars,
    error: state.charsReducer.error,
    fetching: state.charsReducer.fetching
  };
};

export default connect(
  mapStateToProps,
  {
    // chars,
    getChars
  }
)(CharacterListView);
