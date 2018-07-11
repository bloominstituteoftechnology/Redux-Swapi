import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetching } from '../actions/index'

import logo from '../logo.svg'
import '../styles/App.css'
import { bindActionCreators } from '../../node_modules/redux'
// pull in actions from action/index

class App extends Component {
  componentDidMount () {
    this.props.fetching()
  }
  render () {
    console.log(this.props.chars)
    return (
      <div className='App'>
        {this.props.fetching ? (
          <img src={logo} className='App-logo' alt='logo' />
        ) : (
          <ul>
            {this.props.chars.map((char) => {
              return <li key={char.name}>{char.name}</li>
            })}
          </ul>
        )}
      </div>
    )
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
const mapStateToProps = ({ chars }) => {
  return { chars }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetching }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(App)
