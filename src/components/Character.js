import React from "react";
import styled from 'styled-components';

const CharsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  border-radius: 5px;
  color: doggerblue;
`;

const Title = styled.div`
  font-size: 1em;
`;

const Character = props => {
  return 
    <CharsWrapper>
    <li>
      <Title>
        {props.character.name}
      </Title>  
        {props.character.height}
        {props.character.mass}
        {props.character.gender}
        {props.character.species}
        {props.character.birth_year}
        {props.character.films}
        {props.character.starships}
    </li>
    </CharsWrapper>
};

export default Character;
