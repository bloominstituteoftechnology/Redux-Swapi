import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetching, fetched } from '../actions';
import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    this.props.fetched();
  }
  render() {
    console.log("App.js props",this.props);
    return (
      <div className="App">
        {this.props.status ? (
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
  console.log("App.js mapStateToProps", state);
  return {
    chars: state.charsReducer.chars,
    status: state.charsReducer.fetching,
  }
}
// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, {
  fetching,
  fetched
})(App);
