import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetching } from '../actions/index'

import logo from '../logo.svg'
import '../styles/App.css'

class App extends Component {
  componentDidMount () {
    this.props.fetching()
  }
  render () {
    console.log('in render', this.props.api.fetching)
    return (
      <div className='App'>
        {this.props.api.fetching ? (
          <img src={logo} className='App-logo' alt='logo' />
        ) : (
          <ul>
            {this.props.chars.map((char) => {
              console.log(char.name)
              return <li key={Date.now() + char.name}>{char.name}</li>
            })}
          </ul>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ chars, api }) => {
  return { chars, api }
}

export default connect(mapStateToProps, { fetching })(App)
