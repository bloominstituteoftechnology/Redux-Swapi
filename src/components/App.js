import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/index';
import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    // call our action
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
const mapDispatchToProps = state => {
  return {
    data: state.data,
    error: state.error,
    fetchingData: state.fetchingData
  }
};

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapDispatchToProps, { fetchData })(App);
