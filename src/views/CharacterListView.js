import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchData } from '../actions';

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchData( )
  }

  render() {
    console.log(this.props)
    if (this.props.fetching) {
      return(
        <div class="lds-ellipsis">
          <h1> Loading.... </h1> 
          <div></div><div></div><div></div><div></div>
        </div>
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mstp = state => {
  console.log( 'Character View State:', state)
  return {
      characters: state.characters,
      fetching: state.isFetching
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(mstp, { fetchData: fetchData })(CharacterListView);
