import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import {fetchChars} from "../actions";

class CharacterListView extends React.Component {
  componentDidMount() {
      this.props.fetchChars();
  }

  render() {
      if (this.props.isFetching) {
          return <h3>Loading Characters...</h3>;
    }
    return (
        <div className="CharactersList_wrapper">
            <CharacterList characters={this.props.characters}/>
            {/* <h1>hi</h1> */}
        </div>
    );
  }
}

const mapStateToProps = state => {
    console.log('state', state.charsReducer.characters)
    return {
        characters: state.charsReducer.characters,
        isFetching: state.charsReducer.isFetching
    }
}
export default connect(
    mapStateToProps
{
    fetchChars
}
)(CharacterListView);
