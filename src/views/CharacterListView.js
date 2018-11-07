import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchPeople } from '../actions';

class CharacterListView extends React.Component {
  componentDidMount() {
    // call our action
	this.props.fetchPeople();
	console.log(this.props.state);
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
	console.log("Fetching Data...");
    }
    return (
      <div className="CharactersList_wrapper">
        {this.props.fetching ? (
		<div>Loading...</div>
	) : (
		< CharacterList characters = {this.props.characters} />

	)}
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProp = state => {
	return{
		characters : state.charsReducer.characters,
		isFetching : state.charsReducer.isFetching
	};
};

export default connect(mapStateToProp, { fetchPeople })(CharacterListView);
