import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

class App extends Component {
  state = {
    next: 1
  };

  componentDidMount() {
    this.props.fetchData('https://swapi.co/api/people/');
  }

  fetchNewData = () => {
    const nextVal = this.state.next < 9 ? this.state.next + 1 : 1;
    this.setState({ next: nextVal });
    this.props.fetchData(`https://swapi.co/api/people/?page=${nextVal}`);
  }

  render() {
    if (this.props.err != null) {
      return (
        <h2 className="error">There was a problem fetching the data.</h2>
      );
    }
    return (
      <div className="App">
        {this.props.isFetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <div>
          <button onClick={this.fetchNewData}>Show different characters.</button>
            <ul>
              {this.props.chars.map(char => {
                return <li key={char.name}>{char.name}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default App;
