import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import {fetchData} from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        { this.props.fetching ? ( <img src={logo} className="App-logo" alt="logo" />
                                ) 
                              : ( <ul>
                                    {/* { console.log(this.props.chars)} */}
                                    { this.props.chars.map(char => {
                                      return (<div key={char.name}>
                                                <li >{char.name}</li>
                                                <li >{char.height}</li>
                                              </div>
                                             );
                                    })}
                                  </ul>
                                )}
      </div>
    );
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
const mapStateToProps = state => {
  console.log(state);
  return {
    chars: state.charsReducer.chars, 
    fetching: state.fetching,
    // errorOnProps: state.error, 
    // fetchedOnProps: state.fetched 
  };
};

export default connect(mapStateToProps, {
  /* actions go here */
  fetchData
})(App);
