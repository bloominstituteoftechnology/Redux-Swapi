import React from "react";
import Character from "./Character";

class CharacterList extends React.Component {

  render() {
    return (
      <div>
      {this.props.isFetching ? <div>Loading data</div> : null}
      <ul>
        {this.props.characters.map(character => {
          return <Character key={character.name} character={character} />
        })}
      </ul>
      </div>
    )
  }
}

export default CharacterList;
