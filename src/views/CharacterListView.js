import React from "react";
import { connect } from "react-redux";
import { fetchChars } from "../actions";

import { CharacterList } from "../components";
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
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
    }
    return (
      <div>
         { this.props.loading ? <h1>LOADING</h1> : null }

         { this.props.error !== '' ? <h1>{this.props.error}</h1> : null }

         { this.props.chars.map( char => <CharacterList character={char} key={char}/> ) }
       </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    chars: state.character,
    loading: state.loading
  }
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
mapStateToProps,
  {
    fetchChars:fetchChars
    /* action creators go here */
  }
)(CharacterListView);
