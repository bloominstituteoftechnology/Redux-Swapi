import React, { Component } from "react";
import { connect } from 'react-redux';

import { getChars } from './actions/index';
import { CharacterListView } from "./views";
import "./styles/App.css";

class App extends Component {
  componentDidMount(){
    this.props.getChars();
  }
  render() {
    return <CharacterListView />;
  }
}

export default connect(() => ({}), {getChars})(App)