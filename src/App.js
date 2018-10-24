import React, { Component } from "react";
import { connect } from 'react-redux';

import { fetchChars } from './actions/index';
import { CharacterListView } from "./views";

import "./styles/App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchChars();
  }

  render() {
    return <CharacterListView />;
  }
}

const mapStateToProps = state => {
  console.log('app state', state);
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    isFetching: state.charsReducer.isFetching
  };
};

export default connect(
  mapStateToProps,
  { fetchChars }
)(App);
