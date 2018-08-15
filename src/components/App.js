import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import '../styles/App.css';
import { thingThatFetches } from '../actions';


class App extends Component {
  componentDidMount() {
    this.props.thingThatFetches();
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
// The render was already here so I didn't change it. I just made sure that I called the action up top in ComponentDidMount. 

const mapStateToProps = state => {
  return { chars: state.chars,
	   fetching: state.fetching
	 };
};
// The comments that were originally in the file were pretty explicit about making sure that our mapStateToProps gets the chars and fetching boolean, but I still had a lot of problems here until I figured out that I didn't need to say state.charReducer.chars or state.charsReducer.fetching, because I already called for the charReducer specifically in my index and not just the default rootReducer. Oops.

export default connect(mapStateToProps, { thingThatFetches })(App);
// I am getting more comfortable with these connect statements and mapStateToProps in general, though.
