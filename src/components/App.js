import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import { fetchingData } from "../actions"

class App extends Component {
  componentDidMount() {
    this.props.fetchingData(); 
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

const mapStateToProps = (state) => {
  console.log(state.charsReducer.characters)
   return {
    fetching: state.charsReducer.fetchingData,
    chars: state.charsReducer.characters
   } 
  
}


export default connect(mapStateToProps, {
 fetchingData
})(App);
