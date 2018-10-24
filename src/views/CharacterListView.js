import React from "react"
import { connect } from "react-redux"
import { CharacterList } from "../components"
import { fetchCharacters } from '../actions'
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetchData()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}

const mapStateToProps = ({ charsReducer: { fetching, characters } }) => ({
  fetching,
  characters
})

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  null /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
  }
)(CharacterListView);