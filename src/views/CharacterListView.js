import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetch_char } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    // console.log('from componentDidMount', this.props)
    this.props.fetch_char();
  }

  render() {
    // console.log('from CLV... ', this.props)
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <h2>Loading...</h2> 
    }
    // return (
    //   <div className="CharactersList_wrapper">
    //     <CharacterList characters={this.props.characters} />;
    //   </div>
    // );
      return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
        {/* {this.props.characters.map(char => {
          return <li>{char.name}</li>
        })} */}
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   console.log('from mapStateToProps', state.characters);
//   return {
//     characters: state.characters,
//     fetching: state.fetching
//   };
// }

const mapStateToProps = (state) => {
  console.log('state from mapStateToProps', state)
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  };
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps, /* mapStateToProps replaces null here */
  {
    /* action creators go here */
    fetch_char
  }
)(CharacterListView);
