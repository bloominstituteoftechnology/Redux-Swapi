import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchPeople } from './../actions';

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
      console.log(this.props)
  }

  componentDidMount() {
    this.props.fetchPeople();
  }

  render() {
    if (this.props.loading) {
      // return something here to indicate that you are fetching data
        return (
          <div>Loading...</div>
        )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  error: state.charsReducer.error,
  loading: state.charsReducer.loading
})

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    fetchPeople
    /* action creators go here */
  }
)(CharacterListView);
