import React from 'react';
import { connect } from 'react-redux';
import { CharacterList } from '../components';
import { fetchCharacters } from './../actions/index';

class CharacterListView extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.fetchCharacters();
    }

    render() {
        if (this.props.fetching) {
            return <h1>Be patient it's coming.</h1>;
        } else if (!this.props.function) {
            return (
                <div className="CharactersList_wrapper">
                    <CharacterList characters={this.props.characters} />
                </div>
            );
        }
    }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
    console.log(state);
    return {
        characters: state.charsReducer.characters,
        fetching: state.charsReducer.fetching
    };
};

const mapDispatchToProps = dispatch => ({
    fetchCharacters: () => dispatch(fetchCharacters())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CharacterListView);
