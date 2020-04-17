import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { GameLocationState, GameContextValue } from './types'
import GameControlBar from './GameControlBar'
import GameContext from './GameContext'
import { Container } from './styles'
import GameCards from './GameCards'

const Game: React.FC = () => {
  const { state } = useLocation<GameLocationState>()

  const [isPaused, setIsPaused] = useState(true)
  const [iconFoundList, setIconFoundList] = useState<string[]>([])
  const [firstSelectedCard, setFirstSelectedCard] = useState(-1)
  const [secondSelectedCard, setSecondSelectedCard] = useState(-1)
  const [iconList, setIconList] = useState<string[]>([])

  const gameContextValue: GameContextValue = {
    difficulty: state.difficulty,
    isPaused,
    setIsPaused,
    iconList,
    setIconList,
    iconFoundList,
    setIconFoundList,
    firstSelectedCard,
    setFirstSelectedCard,
    secondSelectedCard,
    setSecondSelectedCard,
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
