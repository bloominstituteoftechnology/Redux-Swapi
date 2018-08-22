import React, { Component } from "react";
import { connect } from "react-redux";
import { getTheData } from "../actions";
import styled from 'styled-components'

import logo from "../logo.svg";
import "../styles/App.css";

const AppContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100vh;
`
const Character = styled.li`
  list-style: none;
  padding: 10px;
`

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.getTheData();
    console.log('the data mounted, brah.')
  }
  render() {
    return (
      <AppContainer>
        {this.props.isFetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.chars.map(char => {
              return <Character key={char.name}>{char.name}</Character>
            })}
          </ul>
        )}
      </AppContainer>
    );
  }
}
const mapStateToProps = state => {
  return {
    chars: state.charsReducer.chars,
    isFetching: state.charsReducer.isFetching,
    isFetched: state.charsReducer.isFetched,
    errors: state.charsReducer.errors,
  };
};
// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
const mapDispatchToProps = {
  getTheData
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
