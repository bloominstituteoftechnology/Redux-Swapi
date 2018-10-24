import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchChar } from "../actions";

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.fetchChar();
  }

  render() {
    console.log("ChaView.js");
    console.log(this.props.characters);
    console.log(this.props.isFetching);

    if (!this.props.isFetching) {
      // return something here to indicate that you are fetching data
      return <h2>Data is Loading ... </h2>;
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
const mapStateToProps = state => {
  return {
    characters: state.characters, // dogs for when we have the data!
    isFetching: state.isFetching // is our data currently being fetched???
  };
};

export default connect(
  mapStateToProps,
  { fetchChar }
)(CharacterListView);
