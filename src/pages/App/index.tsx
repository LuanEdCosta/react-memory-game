import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import DificultyChooser from '../DifficultyChooser'
import GlobalStyles from '../../styles/Global'
import { useTypedSelector } from '../../hooks'
import THEME_COLORS from '../../styles/Theme'
import Game from '../Game'

const App: React.FC = () => {
  const themeType = useTypedSelector(({ Theme }) => Theme.type)
  const themeColors = THEME_COLORS[themeType]

  return (
    <ThemeProvider theme={themeColors}>
      <GlobalStyles />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={DificultyChooser} />
          <Route exact path="/game" component={Game} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
