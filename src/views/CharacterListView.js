import React from "react";
import {connect} from "react-redux";
import {fetchChars} from "../actions";

import {CharacterList} from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetchChars()
  }

  render() {
    if (this.props.loading) {
      <h1>LOADING</h1>
      // return something here to indicate that you are fetching data
    }
    return (<div>

      {/* {
        this.props.error !== ''
          ? <h1>{this.props.error}</h1>
          : null
      } */}

       <CharacterList characters={this.props.chars} />
    </div>);
  }
}
const mapStateToProps = (state) => {
  return {chars: state.charsReducer.characters, loading: state.charsReducer.loading, error: state.charsReducer.error}
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(mapStateToProps, {
  fetchChars
  /* action creators go here */
})(CharacterListView);
