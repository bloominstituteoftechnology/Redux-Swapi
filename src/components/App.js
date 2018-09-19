import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchingData } from "../actions";
import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index

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

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
const mapStateToProps = state =>{
  console.log(state)
  console.log(state.charsReducer.fetching)
  return {
    chars: state.charsReducer.chars,
    fetching: state.charsReducer.fetching,
  }
}


export default connect(mapStateToProps, {fetchingData})(App);
