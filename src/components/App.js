import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import '../styles/App.css';
import { thingThatFetches } from '../actions';


class App extends Component {
  componentDidMount() {
    this.props.thingThatFetches();
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

const mapStateToProps = state => {
  return { chars: state.chars,
	   fetching: state.fetching
	 };
};

export default connect(mapStateToProps, { thingThatFetches })(App);
