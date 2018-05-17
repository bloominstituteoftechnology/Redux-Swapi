import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import { fetchingPeople } from '../actions';
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.fetchingPeople();

  }
  render() {
    console.log('this props', this.props)
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

const mapStateToProps = (state) => {
  console.log(state)
  return state.charsReducer;
}
// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, {
  /* actions go here */
  fetchingPeople
})(App);


