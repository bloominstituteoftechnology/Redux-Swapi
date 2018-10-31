import React from "react";
import { connect } from "react-redux";
import { fetch } from '../actions';
import { CharacterList } from "../components";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetch()
  }

  render() {
    if (this.props.fetching) {
      return <div className='loading'>Loading Characters...</div>
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
    isFetching: state.charsReducer.isFetching,
    error: state.charsReducer.error
  }
}


export default connect(mapStateToProps, { fetch })(CharacterListView);
