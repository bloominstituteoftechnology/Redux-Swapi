import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchCharacters } from '../actions';
import Loading from '../components/Loading';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log(this.props);
    this.props.fetchCharacters();
  }

  fetchNext = () => {
    if (this.props.next){
      this.props.fetchCharacters(this.props.next);
    }
  }
  fetchPrevious = () => {
    if (this.props.previous){
      this.props.fetchCharacters(this.props.previous);
    }
  }

  render() {
    if (this.props.fetching) {
      return <Loading />
    }
    return (
      <div className="CharactersList_wrapper">
        <span className="fas fa-arrow-left previous" onClick={this.fetchPrevious}></span>
        <CharacterList characters={this.props.characters} />
        <span className="fas fa-arrow-right next" onClick={this.fetchNext}></span>
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    next: state.charsReducer.next,
    previous: state.charsReducer.previous,
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error,
  };
};

export default connect(
  mapStateToProps,
  {
    fetchCharacters,
  }
)(CharacterListView);
