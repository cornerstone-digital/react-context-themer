import React from 'react'
import { Container } from 'constate'
import classnames from 'classnames'

export default (DecoratedComponent, defaultStyles, config) => {
  // const displayName = `Themed${DecoratedComponent.displayName || DecoratedComponent.name}`

  // class ThemeProvider extends React.Component {
  //   state = { theme: defaultStyles }

  //   render() {
  //     return (
  //       <ThemeContext.Provider value={this.state.theme}>
  //         {this.props.children}
  //       </ThemeContext.Provider>
  //     )
  //   }
  // }

  return (props) => {
    const mergeTheme = (baseTheme, customTheme) => {
      const theme = { ...baseTheme }
      Object.keys(theme).forEach((key) => {
        if (customTheme[key] && (theme[key] !== customTheme[key])) {
          theme[key] = classnames(theme[key], customTheme[key])
        }
      })

      return theme
    }

    const initialState = {
      theme: mergeTheme(defaultStyles, props.themeOverride)
    }

    const componentRef = React.createRef()

    return (
      <Container initialState={initialState}>
        {(context) => {
          return <DecoratedComponent ref={componentRef} {...this.props} theme={context.theme} />
        }}
      </Container>
    )
  }
}
