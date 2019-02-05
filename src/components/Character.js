import React from "react";
import {connect} from 'react-redux';

const Character = props => {
  return <li>{props.character.name}</li>;
};

export default connect()(Character);
