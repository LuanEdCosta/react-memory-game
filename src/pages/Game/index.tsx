import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { GameLocationState, GameContextValue } from './types'
import GameContext from './GameContext'
import { Container } from './styles'
import GameControlBar from './GameControlBar'
import GameCards from './GameCards'

const Game: React.FC = () => {
  const { state } = useLocation<GameLocationState>()
  const [isPaused, setIsPaused] = useState(true)
  const [imageList, setImageList] = useState<string[]>([])

  const gameContextValue: GameContextValue = {
    difficulty: state.difficulty,
    isPaused,
    setIsPaused,
    imageList,
    setImageList,
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
