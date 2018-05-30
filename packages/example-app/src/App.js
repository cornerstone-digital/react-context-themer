import React, { Component } from 'react'
import './App.css'

import Button from './components/Button'

const customTheme = {
  'button': 'some-css-class'
}

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Button themeOverride={customTheme} />
      </div>
    )
  }
}

export default App
