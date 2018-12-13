import React from "react";
import { connect } from "react-redux";
import { fetchChars } from "../actions/index";
import { CharacterList } from "../components";

class CharacterListView extends React.Component {

  componentDidMount() {
    this.props.fetchChars();
  }

  render() {

    if (this.props.loading) {
      return <h1>"Everything is proceeding as I have foreseen." - Emperor Palpatine</h1>
    }


      return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    loading: state.charsReducer.loading
  };
};

export default connect( mapStateToProps,{ fetchChars })(CharacterListView);