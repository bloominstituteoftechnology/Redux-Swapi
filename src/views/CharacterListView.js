import React from "react";
import { connect } from "react-redux";
import {fetch} from '../actions'
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
      this.props.characters
      return <div>wait</div>
  
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
    characters: state.charsReducer.chars,
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error,
    fetched: state.charsReducer.fetched
  }
}

export default connect(
  mapStateToProps,
  {
    fetch
  }
)(CharacterListView);
