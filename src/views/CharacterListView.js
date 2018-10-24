import React from "react";
import { connect } from "react-redux";
import { fetch } from '../actions';
import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetch()
  }

  render() {
    if (this.props.isFetching) {
      // return something here to indicate that you are fetching data
      return <div className='loading'>Characters loading...</div>
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
    isFetching: state.charsReducer.isFetching
  };
};
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(mapStateToProps, { fetch })(CharacterListView);
