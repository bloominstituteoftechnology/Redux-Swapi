import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from '../actions/index';
import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.get();
  }
  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.starChars.map(starChars => {
              return <li key={starChars.name}>{starChars.name}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    starChars: state.starChars,
    fetching: state.fetching
  };
};
// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, { get })(App);
