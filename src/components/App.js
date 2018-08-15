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
    return (
      <div className="App">
      <button onClick={()=> this.userREQUEST()}>Strong with you, the Force is</button>
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
