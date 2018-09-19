import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import { fetchChars } from '../actions'

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.fetchChars();
  }
  render() {
    console.log('App Props');
    console.log(this.props);
    console.log(this.props.state.chars);
    fetchChars()
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.state.chars.map(char => {
              return <li key={char.name}>{char.name}</li>;
            })}
            {/* {this.props.chars.map(char => {
              return <li key={char.name}>{char.name}</li>;
            })} */}
          </ul>
        )}
      </div>
    );
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
const mapStatetoProps = state => {
  return {
     state: state.charsReducer

  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      myAction
    }, dispatch)
  };
}
export default connect(mapStatetoProps, { fetchChars
  /* actions go here */
})(App);
