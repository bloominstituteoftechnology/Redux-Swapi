import React from "react";

const Character = props => {
  var styles2 = {
    border: `1px solid ${props.character.eye_color.includes('-') ? 'SteelBlue': props.character.eye_color}`,
    'border-radius': '5px',
    color: 'lightgrey',
    backgroundColor: `${props.character.eye_color.includes('-') ? 'SteelBlue': props.character.eye_color}`,
    height: '100px',
    width: '250px',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    margin: '20px'
  };
return (
  <div>
      <li style={styles2}>{`${props.character.name}, DOB: ${props.character.birth_year}`}</li>
    </div>
  );
};

export default Character;
