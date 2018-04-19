import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchCharActionCreator from '../actions'
import logo from '../logo.svg';
import '../styles/App.css';


class App extends Component {
  constructor(props){
  super(props)

  }
  componentDidMount() {
    this.props.fetchCharActionCreator()
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
const mapStateToProps =(state) => {
  console.log("state", state.charsReducer.fetchingChars);
 return {
   chars: state.charsReducer.chars,
   fetchingChars: state.charsReducer.fetchingChars, 
   fetchedChars: state.charsReducer.fetchedChars,
   error: state.charsReducer.error
 }
}
export default connect(mapStateToProps, {fetchCharActionCreator})(App);
