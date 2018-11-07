import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
import { fetchChars } from "../actions";


class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
  this.props.fetchChars()
  
  
  }
  

  render() {
    if (this.props.loading){return <h1>Loading</h1>}
  return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

console.log(this.state)

const mapStateToProps = state => {
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
