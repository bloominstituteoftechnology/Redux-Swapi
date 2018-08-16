import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getCharacters} from '../actions';
import '../styles/App.css';
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    // call our action
    
    this.props.getCharacters();
  }
  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <h1>Loading...</h1>
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
const mapStateToProps=state=>{
    return {
      chars:state.charsReducer.chars,
    fetching:state.charsReducer.fetching
    };
}
export default connect(mapStateToProps,{getCharacters})(App);
