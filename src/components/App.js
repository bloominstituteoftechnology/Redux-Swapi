import React, { Component } from 'react';
import { connect } from 'react-redux';
import {promiseActions} from '../actions';
import logo from '../logo.svg';
import '../styles/App.css';

// pull in actions from action/index

class App extends Component {

  componentDidMount() {
    this.props.actionProps() 
    // call our action
  }

  render() {
    console.log(this.props);
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

const mapDispatchToProps = state => ({
  chars: state.chars,
  fetching: state.isFetching
})
// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapDispatchToProps, {
  actionProps: promiseActions
   /* actions go here */
})(App);
