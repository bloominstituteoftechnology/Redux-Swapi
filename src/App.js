import React, { Component } from "react";
import { connect } from 'react-redux';
import { CharacterListView } from "./views";
import "./styles/App.css";
import { fetchChars } from "./actions";
import logo from "./logo.svg";;

class App extends Component {
  componentDidMount() {
    this.props.fetchChars();
  }
  render() {
    return (
      <div className="App">
        {this.props.fetching ? ( 
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.chars.map(char => {
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
        )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chars: state.starWars.chars,
    error: state.starWars.error,
    fetching: state.starWars.fetching,
    fetched: state.starWars.fetched
  };
};

export default connect(mapStateToProps, { fetchChars })(App);
// export default App;
