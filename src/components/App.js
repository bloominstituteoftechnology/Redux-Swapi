import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/App.css';
import logo from '../logo.svg'
import {getData} from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.getData();
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

const mapDispatchToProps = state => {
  return{
    chars : state.chars,
    fetching: state.fetching,
  }
};

export default connect(mapDispatchToProps, {getData})(App);
