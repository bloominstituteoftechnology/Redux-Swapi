import React from "react";
import { connect } from "react-redux";

import CharacterList from "../components/CharacterList";
import {fetchData} from '../actions/index';
  // import actions

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    if (this.props.fetching) {
      <h2>Please wait while we get your data</h2>
    } else {
      return (
        <div className="CharactersList_wrapper">
          <CharacterList characters={this.props.characters} />;
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    characters: state.characters,
    error: state.error,
    isFetching: state.isFetching
  }
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
mapStateToProps,
  {
    fetchData
  }
)(CharacterListView);
