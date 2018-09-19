import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import { fetch } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetch();
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
const mapStateToProps = state => {
  console.log(state);
  return {
    chars: state.charsReducer.chars,
    error: state.charsReducer.error,
    fetching: state.charsReducer.fetching,
    fetched: state.charsReducer.fetched,
  };
};
// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean

// const mapDispatchToProps = state => {
//   console.log(state);
//   return {
//     chars: state.charsReducer.chars,
//     fetching: state.charsReducer.fetching
//   };
// };
export default connect(mapStateToProps, { fetch })(App);
