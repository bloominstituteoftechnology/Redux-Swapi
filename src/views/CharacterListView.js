import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchChars } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchChars();
  }

  render() {
    if (this.props.fetching) {
      return ( <h1>Loading.  It shanty be lawn ghee.</h1> );
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
const mapStateToProps = state => { 
  return {
    characters: state.characters,
    fetching: state.fetching,
    error: state.error
  };
}
// the characters and the fetching boolean
export default connect(mapStateToProps, { fetchChars })(CharacterListView);
