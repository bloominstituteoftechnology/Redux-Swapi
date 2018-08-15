import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import {action} from '../actions';
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.action()
  }
  render() {
    console.log(this.props)
    let chars; 
    this.props.chars ?  chars = this.props.chars :   chars = []; 
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {chars.map(char => {
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

const mapStateToProps = state => ({
  chars: state.chars,
  fetching: state.chars,
  fetched: state.fetched,
  error: state.error,
})

export default connect(mapStateToProps, {
  action
})(App);
