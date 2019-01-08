import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { addCharacter } from '../actions';
import Loading from '../components/Loading';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log(this.props);
    this.props.addCharacter('test');
  }

  render() {
    if (this.props.fetching) {
      return <Loading />
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
  };
};

export default connect(
  mapStateToProps,
  {
    addCharacter,
  }
)(CharacterListView);
