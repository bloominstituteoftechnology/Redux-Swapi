import React, { Component } from "react";
// import { connect } from 'react-redux';
// import { getCharacters } from './actions/index.js';
import { CharacterListView } from "./views";
import "./styles/App.css";

class App extends Component {
  // Added this:
    constructor(props) {
      super(props);
      this.state = {
            characters: []
      // Assign state itself, and a default value for items
      }
    }

    // componentDidMount() {
    //   // call our action
    //   this.props.getCharacters()
    // }
  render() {
    return <CharacterListView />;
  }
}

export default App;
