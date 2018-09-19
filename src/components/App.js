import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch } from '../actions/index';
import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
	  this.props.fetch();
  }
  render(props) {
	 console.log(this.props);
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

const mapToProps = (props) => {
return(
{chars:props.chars,
fetching:props.fetching}
);
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapToProps, { fetch })(App);
