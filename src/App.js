import React, { Component } from "react";

import { CharacterListView } from "./views";
import "./styles/App.css";

class App extends Component {
  render() {
    return <CharacterListView id='character-list-view' />;
  }
}

export default App;
