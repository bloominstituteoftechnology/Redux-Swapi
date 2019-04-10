/* eslint-disable no-useless-constructor */

import React from 'react'
import { connect } from 'react-redux'
import { CharacterList } from '../components'
import { getCharacters } from '../actions'

class CharacterListView extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.getCharacters()
  }

  render() {
    if (this.props.isFetching) {
      return 'loading...'
    }
    return (
      <div className='CharactersList_wrapper'>
        <section className='hero is-danger'>
          <div className='hero-body'>
            <h4 className='title'>Star Wars</h4>
          </div>
        </section>
        <div className='container' style={{ padding: '2rem .5rem' }}>
          <CharacterList characters={this.props.characters} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  error: state.charsReducer.error,
  fetching: state.charsReducer.fetching,
})

export default connect(
  mapStateToProps,
  { getCharacters }
)(CharacterListView)
