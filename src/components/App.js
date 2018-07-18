import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import '../styles/App.css';
import { fetchChars } from '../actions/index'

class App extends Component {
  componentDidMount() {
    this.props.fetchChars
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
        )}
      </div>
    );
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean

const mapDispatchToProps = ({chars, fetching}) => (
  { chars, fetching }
)

export default connect(mapDispatchToProps, fetchChars)(App);
