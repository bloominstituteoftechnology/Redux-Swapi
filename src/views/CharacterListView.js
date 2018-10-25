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
  
    console.log(this.props.characters);
    console.log(this.props.isFetching);

    if (this.props.isFetching ) {
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
  // console.log("mapState", state);
  // console.log("mapState", state.charsReducer);

  // when using multiple reducers, need to specify the reducer name after state
  return {
    characters: state.charsReducer.characters, 
    isFetching: state.charsReducer.charisFetching 
  };
};

export default connect(
  mapStateToProps,
  { fetchChar }
)(CharacterListView);
