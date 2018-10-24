import React from "react";
import { connect } from "react-redux";
import {fetch} from '../actions'
import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetch()
    
    console.log(this.props)
    console.log(this.props.characters)
  }

  render() {
    if (this.props.fetching) {
      this.props.characters
      return <div>wait</div>
      // return something here to indicate that you are fetching data
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
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    fetch
  }
)(CharacterListView);
