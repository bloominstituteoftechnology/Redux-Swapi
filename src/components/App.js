import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchChars } from '../actions/index.js';
import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      chars:[]
    }
  }

  componentDidMount() {
    // console.log(this.props);
    this.props.fetchChars();
    
  }
  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {
              this.props.chars.map((char, i) => {
                  console.log(this.props.chars)
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

export const mapDispatchToProps = (state) => {
  console.log("state in mapDis", state);
  
  return {
    chars: state.charsReducer.chars,
    fetching: state.charsReducer.fetching,
  }
}
// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapDispatchToProps, {
  fetchChars
})(App);
// charsReducer.chars[""0""]