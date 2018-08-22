import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import '../styles/App.css';
import { fetchingChar } from '../actions';

// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.fetchingChar();
    const fetchedItems = JSON.parse(localStorage.getItem('fetched'));
    if (fetchedItems !== null) {
      this.props.fetched(fetchedItems);
    }
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
            <ul>
              {this.props.chars.map(char => {
                console.log(char.name)
                // return <li key={char.name}>{char.name}</li>;
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
    chars: state.charsReducer.chars
  };
};

export default connect(mapDispatchToProps, { fetchingChar })(App);
