import React, { Component } from "react";
import axios from "axios"
import { CharacterListView } from "./views";
import "./styles/App.css";

class App extends Component {
  componentDidMount() {
    axios
    .get(`https://swapi.co/api/people/`)
    .then(response => {
        console.log(response);
    })
  }

  render() {
    return <CharacterListView />;
  }
}

export default App;
