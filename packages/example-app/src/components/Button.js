import React, { Component } from 'react'
import withTheme from '../decorators/withTheme'

class Button extends Component {
  render () {
    console.log(this.props)
    return (
      <button className={this.props.theme.button}>Button Text</button>
    )
  }
}

const defaultTheme = {
  button: 'default-class',
  [['button:active']]: 'some-active-class'
}

export default withTheme(Button, defaultTheme)
