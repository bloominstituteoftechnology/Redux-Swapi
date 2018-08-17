import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import { fetchPeople, FETCHING, ERR_FETCHED, IS_FETCHED } from '../actions/index';

class App extends Component {
  componentDidMount() {
    this.props.fetchPeople();
  }

  render() {
    return (
      <div className="App">
        {this.props.fetching
          ? <img src={logo} className="App-logo" alt="logo" />
          : (
          <ul>
            {this.props.people.map(char => {
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { people, isFetching } = state.charsReducer;
  return {
    people: people,
    fetching: isFetching
  };
}

export default connect(mapStateToProps, { fetchPeople, FETCHING, ERR_FETCHED, IS_FETCHED })(App);