import React, { Component } from "react";

import { CharacterListView } from "./views";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CharacterListView />
      </div>
    );
  }
}

export default App;
