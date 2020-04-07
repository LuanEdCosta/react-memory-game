import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { GameLocationState, GameContextValue } from './types'
import GameContext from './GameContext'
import { Container } from './styles'
import GameControlBar from './GameControlBar'
import GameCards from './GameCards'

const Game: React.FC = () => {
  const { state } = useLocation<GameLocationState>()
  const [isPaused, setIsPaused] = useState(false)

  const gameContextValue: GameContextValue = {
    difficulty: state.difficulty,
    isPaused,
    setIsPaused,
  }

  return (
    <GameContext.Provider value={gameContextValue}>
      <Container>
        <GameCards />
        <GameControlBar />
      </Container>
    </GameContext.Provider>
  )
}

export default Game
