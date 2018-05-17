import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchChars } from '../actions'; // pull in actions from action/index
import logo from '../logo.svg';
import '../styles/App.css';

class App extends Component {
  componentDidMount() {
  
    this.props.fetchChars();
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


const mapStateToProps = ({ charsReducer }) => {
  return {
    fetching: charsReducer.fetching,
    chars: charsReducer.chars
  };
};

export default connect(mapStateToProps, { fetchChars })(App);
