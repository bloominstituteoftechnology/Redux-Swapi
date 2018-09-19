import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import { fetchPeople } from '../actions'
import Character from './Character';

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.fetchPeople();
  }

  render() {
    return (
      <div className="App">
        {this.props.fetchingPeople ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.chars.map(char => {
              return <Character key={char.name} char={char} />;
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    chars: state.charsReducer.chars,
    error: state.charsReducer.error,
    fetchingPeople: state.charsReducer.fetchingPeople
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, { fetchPeople })(App);
