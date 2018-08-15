import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import {fetching} from '../actions';

class App extends Component {
  componentDidMount() {
   this.props.fetching()
  }
  render() {
    return (
      <div className="App">
        {this.props.loading ? (
          <i class="fas fa-spinner fa-pulse"></i>
        ) : (
          <div className="chars">
          <h1>CoooOOoOl Characterz</h1>
            {this.props.chars.map(char => {
              return <div className="char" key={char.name}><p>{char.name}</p></div>;
            })}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chars: state.chars,
    loading: state.loading,
    error: state.error
  }
};


// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, {fetching})(App);
