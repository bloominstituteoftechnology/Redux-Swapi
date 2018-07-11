import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import {fetchData} from '../actions';

class App extends Component {
  componentDidMount() {
    // call our action...you may need to invoke or return
    this.props.fetchData();
  }
  render() {
    console.log(this.props);
    console.log('2');
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
const mapStateToProps = state => {
  return {
    chars: state.chars,
    fetching: state.fetching
  }
}
// the chars and the fetching boolean
export default connect(mapStateToProps, { fetchData })(App);
