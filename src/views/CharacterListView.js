import React from "react";
import { connect } from "react-redux";
import { getData } from '../actions/index'
import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
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

const mapDispatchToProps = {
  getData: getData
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  null,
  mapDispatchToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
  }
)(CharacterListView);
