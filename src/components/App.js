import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import { fetchPeople } from '../actions';

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.fetchPeople();
  }
  render() {
    if(this.props.chars.length > 0) {
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
    } else {
      return (<div>Loading...</div>)
    }
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean

const mapStateToProps = (state) => {
  return {
    chars: state.charsReducer.chars,
    fetching: state.charsReducer.fetching,
  }
}


export default connect(
  /* actions go here */
  mapStateToProps, { fetchPeople }
)(App);
