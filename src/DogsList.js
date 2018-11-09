/*
import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  null mapStateToProps replaces null here ,
  {
    action creators go here 
  }
)(CharacterListView);

*/

//ADDED CODE

import React from "react";
import { connect } from "react-redux";

const DogsList = props => {
  return (
    <div>
      <p>{props.error}</p>
      {props.loading ? (
        <h2 className="loading">Loading...</h2>
      ) : null}
      {props.dogs.map(dog => <img src={dog} key={dog} className="dog-image" />)}
    </div>
  );
};

const mapStateToProps = state => {
  // We are returning an object defining the props to be passed.
  // In this case, props.dogs will equal whatever state.dogs.dogs is equal to. etc.
  return {
    dogs: state.dogs.dogs,
    error: state.dogs.error,
    loading: state.dogs.loading
  };
};

export default connect(mapStateToProps)(DogsList);
