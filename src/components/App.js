import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import { getChars } from '../actions';
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    console.log('props ', this.props);
    this.props.getChars();
  }
  render() {
    return (
      <div className="App">
        <div className='title'>
          <h1>Star Wars App</h1>
        </div>
        {
          this.props.fetching ? (
            <img src={logo} className="App-logo" alt="logo" />
          ) : (
            <div className='char-container'>
            {this.props.chars.map(char => {
              return (
                <div className='char' key={char.created}>
                  <h2>{char.name}</h2>
                  <p>Appears in {char.films.length} movies</p>
                  <p>Birth year {char.birth_year}</p>
                  <p>{char.height}cm tall, {char.mass}kg</p>
                  <p>Eye color: {char.eye_color}, Hair color: {char.hair_color}</p>
                </div>
              );
            })}
            </div>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    chars: state.chars,
    fetching: state.fetching
  };
};
// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, { getChars })(App);
