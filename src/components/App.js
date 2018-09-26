import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchData} from '../actions/index.js'
import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    this.props.fetchData()

  }
  render() {
    return (
      <div className="App">
        {this.props.fetchingData ? (
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

const mapStateToProps = state => ({


  fetchingData: state.fetchingData,
  chars: state.swapi,

});
// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, {fetchData})(App);
