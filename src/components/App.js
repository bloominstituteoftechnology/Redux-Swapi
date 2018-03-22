import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/App.css';
// pull in actions from action/index
import { getChars } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.getChars();
  }
  render() {
    return (
      <div className="App">
          <ul>
            {this.props.chars.map(char => {
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    chars: state.chars,
    error: state.errorMessage,
  };
}


// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, { getChars })(App);
