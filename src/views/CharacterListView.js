import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchStarWars } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetchStarWars();
  }

  render() {
    //console.log(props);
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
      <h1>StarWar..........</h1>
        {/*<CharacterList characters={this.props.characters} />;*/}
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
    return {
      starWars : state.fetchStarWars,
      isFetching : state.isFetching,
      error : state.error/* action creators go here */
    }
}
export default connect(mapStateToProps, { fetchStarWars })(CharacterListView);
