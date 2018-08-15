import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import logo from '../logo.svg';
import '../styles/App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
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
      </div>
    );
  }
}

const mapStateToProps = ({ charsReducer }) => {
  const { chars, isFetching } = charsReducer;
  return { chars, isFetching };
};

export default connect(mapStateToProps, { fetchData })(App);
