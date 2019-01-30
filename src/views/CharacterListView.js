import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { CharacterList } from "../components";
// import actions
import { getData } from "../actions";

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // call our action
    this.props.getData();
  }

  render() {
    return (
      <div>
        {this.props.fetching && (
          <Loader type="Puff" color="#00BFFF" height="400" width="400" />
        )}
        <div className="CharactersList_wrapper">
          {this.props.characters && (<CharacterList characters={this.props.characters} /> )}
        </div>
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  return {
    fetching: state.charsReducer.isLoading,
    characters: state.charsReducer.characters.results
  };
};
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    getData
  }
)(CharacterListView);
