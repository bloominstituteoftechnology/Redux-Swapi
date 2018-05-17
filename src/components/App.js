import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import { fetchSwapi } from '../actions';


class App extends Component {
  componentDidMount() {
    // call our action
    this.props.fetchSwapi();
  }
  render() {
    return (
      <div className="App">
        {/* {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : ( */}
        {this.props.chars.fetching ? <div>Loading</div> : null}
          <ul> 
            {this.props.chars.chars.map(char => {
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
        
      </div>
    );
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean

const mapDispatchToProps = state => {
  console.log(state);
  return {
    chars: state.charsReducer
    // fetching: state.fetching
  }
  
};


/* actions go here */
export default connect(mapDispatchToProps, {fetchSwapi})(App); 
