import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetching_data } from '../actions';
import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.fetching_data();  
  }
  render() {
    return (
       <div className="App">
       <h6>Test</h6>
        {
          this.props.fetching ? (
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
  )}
}

const mapStateToProps = (state) => {
  console.log(state.charsReducer.chars);
  console.log(state.charsReducer.fetching);
  return {
    chars: state.charsReducer.chars,
    fetching: state.charsReducer.fetching 
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, { fetching_data })(App);

  