import React, { Component } from 'react';
import { connect } from 'react-redux';

// pull in actions from action/index
import { getCharacters } from '../actions';
import logo from '../logo.svg';
import '../styles/App.css';

class App extends Component {
  componentDidMount() {
    this.props.getCharacters();
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        {this.props.fetchingCharacters ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.characters.map(character => {
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
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    fetchingCharacters: state.charsReducer.fetchingCharacters
  };
};

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, { getCharacters })(App);