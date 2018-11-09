import React, { Component } from "react";

import "./styles.css";

/*
class App extends Component {
  render() {
    return <CharacterListView />;
  }
}
*/

//ADDED CODE
import SearchBox from "./SearchBox";
import DogsList from "./DogsList";

const App = () => {
  return (
    <div className="App">
      <SearchBox />
      <h1>Doggos:</h1>
      <DogsList />
    </div>
  );
};

export default App;
