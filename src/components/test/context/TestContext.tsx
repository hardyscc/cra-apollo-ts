import * as React from 'react'

import { ThemeContext, IThemeContextState, themes } from './ThemeContext'
import ThemeTogglerButton from './ThemeTogglerButton'

class TestContext extends React.Component<{}, IThemeContextState> {
  constructor(props: {}) {
    super(props)

    const toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }))
    }

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      theme: themes.light,
      toggleTheme
    }
  }

  public render() {
    // The entire state is passed to the provider
    return (
      <ThemeContext.Provider value={this.state}>
        <ThemeTogglerButton />
      </ThemeContext.Provider>
    )
  }
}

export default TestContext
