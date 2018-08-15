import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

class App extends Component {
  state = {
    next: 2
  };

  componentDidMount() {
    this.props.fetchData('https://swapi.co/api/people/');
  }

  fetchNewData = () => {
    const nextVal = this.state.next < 9 ? this.state.next + 1 : 1;
    this.setState({ next: nextVal });
    console.log(nextVal);
    this.props.fetchData(`https://swapi.co/api/people/?page=${nextVal}`);
  }

  render() {
    console.log(this.props.chars)
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
