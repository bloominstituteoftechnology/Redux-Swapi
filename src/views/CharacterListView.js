import React from 'react'
import { connect } from 'react-redux'

import { fetchData } from '../actions'
import { CharacterList } from '../components'

// import actions

class CharacterListView extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    // call our action
    this.props.fetchData()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data

      return <h2>Wait while we get your data</h2>
    } else {
      return (
        <div className="CharactersList_wrapper">
          <CharacterList characters={this.props.characters} />
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    characters: state.characters,
    error: state.error,
    isFetching: state.isFetching
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    fetchData
  }
)(CharacterListView)
