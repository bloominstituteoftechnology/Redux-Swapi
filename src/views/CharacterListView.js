import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getFriends } from '../actions';

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    if (this.props.fetching) {
      return <h2>Getting Friends...</h2>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { characters, fetching} = state.charsReducer;
  console.log(state);
  return {
    characters,
    fetching
  }
}

export default connect(mapStateToProps, { getFriends })(CharacterListView);
