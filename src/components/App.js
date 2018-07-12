import React, { Component } from 'react';
import { connect } from 'react-redux';
import { beginFetch } from '../actions';

import logo from '../logo.svg';
import '../styles/App.css';

class App extends Component {
  componentDidMount() {
    this.props.beginFetch();
  }

  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.charsArr.map(char => {
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    charsArr: state.charsArr,
    fetching: state.fetching,
  };
};

export default connect(mapStateToProps, { beginFetch })(App);
