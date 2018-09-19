import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import {fetchData} from '../actions';

class App extends Component {
  componentDidMount() {
    // this.props.fetchData();
  }

  handleFetchClick =()=>{
    this.props.fetchData();
  }

  render() {
    return (
      <div className="App">
        <button className="fetch-button"
                onClick={ this.handleFetchClick}>Fetch</button>
        { this.props.fetching ? ( <img src={logo} className="App-logo" alt="logo" />
                                ) 
                              : ( <div>
                                    {/* { console.log(this.props.chars)} */}
                                    { this.props.chars.map(char => {
                                      return (<div key={char.name} className="charCard">
                                                <li >Name: {char.name}</li>
                                                <li >Height: {char.height}</li>
                                              </div>
                                             );
                                    })}
                                  </div>
                                )}
      </div>
    );
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
const mapStateToProps = state => {
  // console.log(state);
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
  // startFetch
})(App);
