import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

class App extends Component {
  state = {
    next: 1
  };

  componentDidMount() {
    this.props.fetchData();
  }

  fetchNewData = () => {
    let { next } = this.state;
    next = next < 9 ? next + 1 : 1;
    this.setState({ next });
    this.props.fetchData(`?page=${next}`);
  }

  render() {
    if (this.props.err != null) {
      return (
        <h2 className="error">
          There was a problem fetching the data.
        </h2>
      );
    }
    return (
      <div className="App">
        {this.props.isFetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <div>
            <button onClick={this.fetchNewData}>
              Show different characters.
            </button>
            <ul className="chars">
              {this.props.chars.map(({ name }) => (
                <li key={name}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default App;
