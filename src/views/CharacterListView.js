import React from "react";
import { connect } from "react-redux";
import { fetchCHARS } from "../actions";
import { CharacterList } from "../components";


class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchCHARS();
    // call our action
  }

  render() {
    if (this.props.isfetching) {
      return (
        <h2>Please wait, fetching Characters...</h2>
      );
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.chars} />;
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    chars: state.charsReducer.chars,
    isFetching: state.charsReducer.isFetching 
  };
};
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(mapStateToProps,{ fetchCHARS })(CharacterListView);
