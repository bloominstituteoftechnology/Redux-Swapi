import React, { Component } from 'react';
import { connect } from 'react-redux'; // connects (pulls in) actions from action/index
import { StarWarsCharFetch } from '../actions';
import logo from '../logo.svg';
import '../styles/App.css';


class App extends Component {
  componentDidMount() {
    this.props.StarWarsCharFetch();
  }
  render() {
    console.log({ 'These are our props Yo!': this.props});
    return (
      <div>
        <h1>Starwars Character</h1>
          <div>
            {this.props.isFetching ? "-Loading-" : ""}
          </div>
          <ul>
            {this.props.characters.map(char => {
              console.log(char)
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
      </div>
    );
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
const mapStateToProps = state => {
  const { charsReducer } = state
  return charsReducer
};

export default connect(mapStateToProps, { StarWarsCharFetch })(App);