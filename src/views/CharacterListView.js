import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from '../logo.svg'
import { CharacterList } from '../components'
import { fetchData } from '../actions'

const mapStateToProps = ({ charsReducer: { fetching, chars } }) => ({
  fetching,
  chars
})

class CharacterListView extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <div className="CharactersList_wrapper">
            <CharacterList characters={this.props.chars} />
          </div>
        )}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  {
    fetchData
  }
)(CharacterListView)
