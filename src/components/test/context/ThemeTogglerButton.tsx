import * as React from 'react'
import { Button } from 'antd'

import { ThemeContext } from './ThemeContext'

function ThemeTogglerButton() {
  // The Theme Toggler Button receives not only the theme
  // but also a toggleTheme function from the context
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <Button
          onClick={toggleTheme}
          style={{ backgroundColor: theme.background }}>
          Toggle Theme
        </Button>
      )}
    </ThemeContext.Consumer>
  )
}

export default ThemeTogglerButton
