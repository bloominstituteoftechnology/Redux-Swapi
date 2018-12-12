import React from "react";
import { connect } from "react-redux";
import { fetchChars } from "../actions/index";
import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {

  componentDidMount() {
    // call our action
    this.props.fetchChars();
  }

  render() {

    if (this.props.loading) {
      return <h1>"Everything is proceeding as I have foreseen." - Emperor Palpatine</h1>
    }


      return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    loading: state.charsReducer.loading
  };
};
// the characters and the fetching boolean
export default connect( mapStateToProps,{ fetchChars })(CharacterListView);
