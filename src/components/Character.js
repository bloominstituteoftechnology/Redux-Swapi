import React from 'react';
import '../styles/App.css'

function Character(props) {
  return (
    <li className="character">
    {props.char.name}
    <div>{props.char.height}</div>
    <div>{props.char.gender}</div>
    <div>{props.char.birth_year}</div>
    </li>
  )
}

export default Character;