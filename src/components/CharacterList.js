import React from 'react';

import Character from './Character';

const CharacterList = props => (
  <ul>
    {props.characters.map(character => (
      <Character key={character.name} character={character} />
    ))}
  </ul>
);

export default CharacterList;
