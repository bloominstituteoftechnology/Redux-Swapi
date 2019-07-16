import React from "react";
import { connect } from "react-redux";
import { getData } from '../actions/index'
import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: '',
      isLoading: false
    }
  }

  componentDidMount() {
    // call our action
    this.props.getData()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
      characters: state.charsReducer.characters,
      isLoading: state.charsReducer.isLoading
  }
}

const mapDispatchToProps = {
  getData: getData
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  mapDispatchToProps 
)(CharacterListView);
