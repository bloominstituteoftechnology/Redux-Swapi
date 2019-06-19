import React from "react";
import styled from "styled-components";
import Character from "./Character";

const Card = styled.div`
  background-color: rgba(103, 128, 159, 1);
  opacity: 0.5;
  width: 50%;
  margin: 1rem auto;
  padding: 0.5rem;
`;

const CharacterList = props => {
  return (
    <ul>
      {props.characters.map(character => {
        return (
          <Card>
            <Character key={character.name} character={character} />
          </Card>
        );
      })}
    </ul>
  );
};

export default CharacterList;
