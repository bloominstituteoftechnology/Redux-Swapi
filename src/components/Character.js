// import React from "react";

// const Character = props => {
//   return <li>{props.character.name}</li>;
// };

// export default Character;

import React from 'react';

const Character = props => {
  const getImage = name => {
    switch (name) {
      case 'Luke Skywalker':
        return 'https://i.imgur.com/snIfH7L.png';
      case 'C-3PO':
        return 'https://i.imgur.com/iY4Yrx6.png';
      case 'R2-D2':
        return 'https://i.imgur.com/eXYava5.png';
      case 'Darth Vader':
        return 'https://i.imgur.com/fa8EzNL.png';
      case 'Leia Organa':
        return 'https://i.imgur.com/TuUgWTZ.png';
      case 'Owen Lars':
        return 'https://i.imgur.com/BlugWLe.png';
      case 'Beru Whitesun lars':
        return 'https://i.imgur.com/QkPN7EN.png';
      case 'R5-D4':
        return 'https://i.imgur.com/7vkAwEG.png';
      case 'Biggs Darklighter':
        return 'https://imgur.com/hjMjZxv.png';
      case 'Obi-Wan Kenobi':
        return 'https://i.imgur.com/YR3UNU3.png';
      default:
        return 'https://i.imgur.com/B1KuQcw.png';
    }
  };
  return (
    <ul className='collection'>
      <li className='collection-item avatar'>
        <img src={getImage(props.character.name)} alt='' className='circle' />
        <span className='title'>{props.character.name}</span>
        <p>
          Mass: {props.character.mass} <br />
          Skin Color: {props.character.skin_color}
        </p>
        <a href='#!' className='secondary-content'>
          <i className='material-icons'>theaters</i>
        </a>
      </li>
    </ul>
  );
};

export default Character;
