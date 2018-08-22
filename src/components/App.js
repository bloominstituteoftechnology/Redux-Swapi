import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/App.css';
import { fetching, fetched, error } from '../actions';

// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    // call our action
    const fetchedItems = JSON.parse(localStorage.getItem('fetched'));
    if (fetchedItems !== null) {
      this.props.fetched(fetchedItems);
    }
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

const mapDispatchToProps = state => {
  return {
    chars: state.fetchedItems
  };
};

export default connect(mapDispatchToProps, {
  /* actions go here */
  fetching,
  fetched,
  error
})(App);
