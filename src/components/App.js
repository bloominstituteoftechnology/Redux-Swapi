import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchChars } from '../actions'; // pull in actions from action/index
import logo from '../logo.svg';
import '../styles/App.css';

class App extends Component {
  componentDidMount() {
    // call our action
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

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
const mapStateToProps = ({ charsReducer }) => {
  return {
    fetching: charsReducer.fetching,
    chars: charsReducer.chars
  };
};
/* actions go here */
export default connect(mapStateToProps, { fetchChars })(App);
