import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchChars } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log('in cdm');
    this.props.fetchChars();
  }

  render() {
    if (this.props.fetching) {
      return ( <h1>Loading.  It shanty be lawn ghee.</h1> );
    }
    console.log('props in cLV', this.props);
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}

const mapStateToProps = state => { 
  console.log('state', state);
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error
  };
}
export default connect(mapStateToProps, { fetchChars })(CharacterListView);
