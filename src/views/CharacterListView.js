import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
import { fetching } from "../actions";

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.fetching();
    console.log(this.props.fetching);
  }

  render() {
    if (this.props.fetching) {
      console.log("fetching data");
      console.log(this.props);
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    isloading: state.charsReducer.isloading,
    success: state.charsReducer.success
  };
};

export default connect(
  mapStateToProps,
  { fetching }
)(CharacterListView);
