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
    console.log(this.props.chars)
    return (
      <div className='App'>
        {this.props.chars.fetching ? (
          <img src={logo} className='App-logo' alt='logo' />
        ) : (
          <ul>
            {this.props.chars.chars.map((char) => {
              return <li key={char.name}>{char.name}</li>
            })}
          </ul>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('in stat props', state.chars.fetching)
  return {
    chars: state.chars
  }
}

export default connect(mapStateToProps, { fetching })(App)
