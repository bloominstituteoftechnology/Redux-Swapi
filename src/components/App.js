import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { fetched } from '../actions';

// presentational
import logo from '../logo.svg';
import '../styles/App.css';

// App
class App extends Component {
  componentDidMount() {
    this.props.fetched();
  }

  // render
  render() {
    console.log(this.props);
    const { chars, fetching, fetched } = this.props;
    
    return (
      <div className="App">
        {
          (fetching)
          ? (
            <img src={ logo } className="App-logo" alt="logo" />
          )
          : (
            <ul>
              {
                chars.map(char => {
                  const { name } = char;
                  return <li key={ name }>{ name }</li>;
                })
              }
            </ul>
          )
        }
      </div>
    );
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
const mapStateToProps = ({ charsReducer }) => {
  console.log(charsReducer);
  return { 
    chars: charsReducer.chars,
    fetching: charsReducer.fetching,
  };
};

export default connect(mapStateToProps, { fetched })(App);
