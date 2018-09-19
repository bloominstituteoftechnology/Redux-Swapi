import React, { Component } from 'react';
import { connect } from 'react-redux';

// pull in actions from action/index
import { getCharacters } from '../actions';
import logo from '../logo.jpg';
import '../styles/App.css';

class App extends Component {
  componentDidMount() {
    this.props.getCharacters();
  }
  render() {
    return (
      <div className="App">
        {this.props.fetchingCharacters ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.character.map(character => {
              return <li key={character.name}>{character.name}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.characters,
    fetchingCharacters: state.fetchingCharacters
  };
};

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, {
  getCharacters
})(App);
