import React from "react";
import { connect } from "react-redux";

import { fetchDogs } from "./actions/dogsActions";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breed: ""
    };
  }

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  searchForBreed = () => {
    // When searchForBreed is called, it will pass the current state to the fetchDogs action creator
    this.props.fetchDogs(this.state.breed);
  };

  render() {
    return (
      <div>
        <h1>Welcome to Star Wars(???), {this.props.name}!</h1>
        <input
          type="text"
          name="breed"
          onChange={this.inputChange}
          value={this.state.breed}
        />
        <button onClick={this.searchForBreed}>Search</button>
      </div>
    );
  }
}
// We are defining our props to be passed to the component here
const mapStateToProps = state => {
  return {
    name: state.name.name
  };
};

export default connect(
  mapStateToProps,
  // The second argument in connect will allow us to pass an action creator as a prop.
  // What we do not see, is that connect will call dispatch for us when the action creator is returned
  { fetchDogs }
)(SearchBox);
