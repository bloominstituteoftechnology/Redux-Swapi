import React, { Component } from "react";
import { connect } from 'react-redux';
import { CharacterListView } from "./views";
import "./styles/App.css";
import { fetchChars } from "./actions";

class App extends Component {
  render() {
    return <CharacterListView />;
  }
}

export default App;
