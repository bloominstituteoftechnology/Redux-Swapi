import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logo from '../logo.svg';
import '../styles/App.css';
import { fetchData } from './../actions';
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    this.props.fetchChars;
    console.log(this.props.fetchChars)
  }
  render() {
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

const mapStateToProps = state => {
  return {
    chars: state.chars
  }
}

const mapDispatchToProps = (dispatch) => {
    const fetchChars = () => {
      dispatch(fetchData());
    }
}
// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default connect(null, {fetchData, chars})(App);