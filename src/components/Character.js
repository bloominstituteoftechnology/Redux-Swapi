import React from "react";
import { connect } from 'react-redux';

const Character = props => {
  return <li className="list-view">{props.character.name}</li>;
};

const mapStateToProps = () => ({})
export default connect(mapStateToProps, {  })(Character)
