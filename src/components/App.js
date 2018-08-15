import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import '../styles/App.css';
import { userREQUEST } from '../actions';

class App extends Component {
  componentDidMount() {
    // call our action
  }
  render() {
    console.log(this.props);
      if (!this.props.chars){
      return (
        <div className="App">
          <button onClick={()=> this.userREQUEST()}>Strong with you, the Force is</button>
        </div>
      )
    } else if (this.props.isFetching){
      return (
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      )
    } else {
      <div className="App">
        <ul>
          {this.props.chars.map(char => {
            return <li key={char.name}>{char.name}</li>;
          })}
        </ul>
      </div>
    }
  }
}

const mapStateToProps= (state)=> {
  return({
    chars: state.chars,
    isFetching: state.isFetching
  })
}
// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, {
  /* actions go here */
})(App);
