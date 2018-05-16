import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import { fetchStarWarsChars } from '../actions'
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.fetchStarWarsChars();
    console.log(this.props)
  }
  
  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.starWarsChars.map(char => {
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}


const mapDispatchToProps = state => {
  console.log(state)
  return {
    starWarsChars: state.starWarsChars,
    fetching: state.fetching
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapDispatchToProps, { fetchStarWarsChars
  /* actions go here */
})(App);
