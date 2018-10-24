import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components/index";
import { fetchChars } from '../actions/index';

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchChars();
  }

  render() {
    if (this.props.fetching) {
      return <div>HEY GIRL, FETCHING DATA!</div>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    isFetching: state.charsReducer.isFetching
  };
};

export default connect(
  mapStateToProps,
  { fetchChars }
)(CharacterListView);
