import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import { CharacterList } from "../components";
import { fetchData } from "../actions";

const Container = styled.div`
margin: 0 auto;
`;
const Card = styled.div`
background-color: rgba(103, 128, 159, 1);
opacity: 0.5;
width: 50%;
margin: 1rem auto;
padding: .5rem;
`;
const Header = styled.div`
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
font-family: 'Press Start 2P', cursive;
  font-size: 2rem;
  font-weight: lighter;
  padding: 0 0 0 1rem;
  margin: 0 0 3rem 0;
`;
class CharacterListView extends React.Component {
  componentDidMount() {
    // call our action
    console.log("======", this.props);
    this.props.fetchData();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (<Container>
<Loader type="Circles" color="green" height="100" width="100" />;
      </Container>);
    }
    return (
      <Container>
      <Card><Header>Star Wars</Header></Card>
        <CharacterList characters={this.props.characters} />
      </Container>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
function mapStateToProps(state) {
  return {
    characters: state.people.characters,
    fetching: state.people.fetching
  };
}
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    fetchData
  }
)(CharacterListView);
