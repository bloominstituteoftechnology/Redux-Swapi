import React from "react";
import { connect } from "react-redux";
import { fetchChars } from "../actions/index";
	
import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  //constructor() {
    //super();
  //}

  componentDidMount() {
    // call our action
    this.props.fetchChars();
	
  }

  render() {
    if (this.props.loading) {
      return <h1>Proceed</h1>
	
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    loading: state.charsReducer.loading
  };
};

export default connect( mapStateToProps,{ fetchChars })(CharacterListView);
// // our mapStateToProps needs to have two properties inherited from state
// // the characters and the fetching boolean
// export default connect(
//   null /* mapStateToProps replaces null here */,
//   {
//     /* action creators go here */
//   }
// )(CharacterListView);
