import React, { Component } from "react";
import {applyMiddleware,createStore } from 'redux';
import thunk from 'redux-thunk'

import { CharacterListView } from "./views";
import "./styles/App.css";

class App extends Component {
  render() {
    return <CharacterListView />;
  }
}

export default App;
