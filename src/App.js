import React, { Component } from "react";
import styled from "styled-components";
import { CharacterListView } from "./views";



const MainContainer = styled.div`
  background: linear-gradient(to top, rgba(80, 68, 18, 0.6) 10%, transparent),
    url(https://images3.alphacoders.com/114/thumb-350-11439.png) center/cover
      no-repeat border-box,
    skyblue;
  width: 100vw;
  min-height: 100vh;
  position: relative;
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <MainContainer>
    <CharacterListView />
    </MainContainer>
    );
  }
}

export default App;
