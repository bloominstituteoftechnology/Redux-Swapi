import React, { Component } from 'react';
import { connect } from 'react-redux';
import { swapiAction } from '../actions';
import logo from '../logo.svg';
import '../styles/App.css';
import { FETCHING, FETCHED, ERROR } from '../reducers/starWarsReducer';
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    return this.props.swapiAction();
  }
  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          console.log(this.props.chars),
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
  return {
    chars: state.characters,
    fetching: state.fetching
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, {
  swapiAction
})(App);
