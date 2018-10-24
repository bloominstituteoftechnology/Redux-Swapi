import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
// import actions
import { fetchData } from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetchData();
  }

  render() {
    if (this.props.isFetching) {
      // return something here to indicate that you are fetching data
      return <h1>Fetching The Characters</h1>;
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
    characters: state.characters,
    isFetching: state.isFetching,
    errof: state.error
  };
};
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    fetchData
  }
)(CharacterListView);
