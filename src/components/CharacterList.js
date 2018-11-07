import React from "react";
import {fetchCharacters} from "../actions/index"
import {connect} from 'react-redux'

import Character from "./Character";

class CharacterList extends React.Component {
    constructor(props) {
        super();
    }

    componentDidMount() {
        this.props.fetchCharacters();
    }

    render() {
        return (
            <ul>
                {
                    this.props.loading
                        ? "LOADING"
                        : this.props.characters.map(character => {
                            return <Character key={character.name} character={character}/>
                        })
                }

                { this.props.error && "Could not fetch characters" }
            </ul>
        );
    }

};

const mapStateToProps = ({ loading, error, characters }) => {
    return {
        loading,
        error,
        characters
    }
};

export default connect(mapStateToProps, {fetchCharacters})(CharacterList);
