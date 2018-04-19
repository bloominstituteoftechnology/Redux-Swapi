import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import { fetchChars } from '../actions';

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.fetchChars();
  }
  render() {
    return (
      <div className="App">
      <h1>SW-API</h1>
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.chars.map(char => {
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
        )}
        <img src="https://vignette.wikia.nocookie.net/starwars/images/b/b2/X-wing_2_Fathead.png/revision/latest?cb=20161004003758" alt="x-wing-fighter"></img>
      </div>
    );
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean

const mapStateToProps = ({ charsReducer }) => {
  return {
    fetching: charsReducer.fetching,
    chars: charsReducer.chars
  }
}

export default connect(mapStateToProps, {
  /* actions go here */
  fetchChars
})(App);
