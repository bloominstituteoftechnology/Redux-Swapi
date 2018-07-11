import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import { fetchData } from '../actions';
class App extends Component {
  componentDidMount() {
    this.props.fetchData();
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
const mapDispatchToProps = (state) => {
  console.log(state.charsReducer);
  return {
    chars: state.charsReducer.chars,
    fetching: state.charsReducer.fetching
  }
}
// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapDispatchToProps, {
  fetchData
})(App);
