import React from "react";
import { connect } from "react-redux";
import { fetchChars } from "../actions";
import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  componentDidMount() {
    // call our action
    this.props.fetchChars();
  }

  render() {
    if (this.props.isFetching) {
      return <h1>Characters loading...</h1>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}
  
const mapStateToProps = state => {
  return{
    characters: state.charsReducer.characters,
    isFetching: state.charsReducer.isFetching,
  };
};

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { fetchChars }
)(CharacterListView);
