import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import { userRequest } from "../actions";

class App extends Component {
  render() {
    if(this.props.chars.length < 1) {
      return(
        <div className='App'>
          <button onClick={() => this.props.userRequest()}>Click Here</button>
        </div>
      )
    } else if(this.props.isFetching) {
      return(
        <div>
          <img src={logo} className='App-logo' alt='logo'/>
        </div>
      )
    } else {
      return(
        <div>
          <ul>
            {this.props.chars.map(char => {
              return <li key={char.name}>{char.name}</li>
            })}
          </ul>
        </div>
      )
    }
  }
}


const mapStateToProps = (state) => {
  console.log(state);
  return({
    chars: state.charsReducer.characters,
    isFetching: state.isFetching
  })
}
// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, {
  userRequest
})(App);
