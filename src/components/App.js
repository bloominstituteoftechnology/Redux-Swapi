import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import {fetchSwapi} from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchSwapi();
  }
  render() {
    return (
      this.props.error ?
      <div style={{display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: 'red', fontWeight: 'bold'}}>
        <h1>Error: {this.props.error.response.status}</h1>
        <p>Page {this.props.error.response.data.detail}</p>
      </div>
      :
      <div className="App">
        {this.props.fetching ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <img src={logo} className="App-logo" alt="logo"  />
          </div>
        ) : (
          <ul style={{display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            {this.props.chars.map(char => {
              return (
                <div style={{border: '1px solid black', boxShadow: '1px 1px 1px 3px rgba(0,0,0,0.2)', width: '300px', margin: '0 0 20px'}} key={char.name}>
                  <h4>{char.name}</h4>
                  <p>Birth Year: {char.birth_year}</p>
                  <p>Created: {char.eye_color}</p>
                  <p>Gender: {char.gender}</p>
                  <p>Hair Color: {char.hair_color}</p>
                  <p>Mass: {char.mass}</p>
                  <p>Skin Color {char.skin_color}</p>
                  <p><a href={char.url}>Link</a></p>
                </div>
              )
            })}
          </ul>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    chars: state.chars,
    fetching: state.fetching,
    fetched: state.fetched,
    error: state.error
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, {fetchSwapi})(App);
