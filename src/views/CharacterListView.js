import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
import { fetchChars } from "../actions";


class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
  fetchChars()
  }
  

  render() {
     {
      <h1>We Are Getting Your Star Wars Characters</h1>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return({
  characters: state.chars.characters,
  loading: state.chars.loading
  })
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
   fetchChars
  }
)(CharacterListView);
