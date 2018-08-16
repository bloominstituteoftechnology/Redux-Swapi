import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import {getData} from '../actions'
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    // call our action
    console.log("CDM");
    this.props.getData();
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        {this.props.isFetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.chars.map(char => {
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
        )}
        {(this.props.isFetching) ?  (<div>this.props.isFetching</div>) : null}
        {(this.props.isFetched) ?  (<div>this.props.isFetched</div>) : null}
      </div>
    );
  };
};

const mapStateToProps = state => {
  console.log(state);
  return {
    isFetching: state.charsReducer.isFetching,
    isFetched: state.charsReducer.isFetched,
    hasErrors: state.charsReducer.hasErrors,
    chars: state.charsReducer.chars,
    errors: state.charsReducer.errors
  };
};

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean

const mapDispatchToProps = {
    getData
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(App);
