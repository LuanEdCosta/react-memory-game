import React, { useState } from 'react'
import { useTimer, useTypedSelector } from '../../hooks'
import GameWinMessage from './GameWinMessage'
import GameControlBar from './GameControlBar'
import GameContext from './GameContext'
import { Container } from './styles'
import GameCards from './GameCards'

const Game: React.FC = () => {
  const [iconList, setIconList] = useState<string[]>([])
  const [iconFoundList, setIconFoundList] = useState<string[]>([])
  const [firstSelectedCard, setFirstSelectedCard] = useState(-1)
  const [secondSelectedCard, setSecondSelectedCard] = useState(-1)
  const [isShowingWinModal, setIsShowingWinModal] = useState(false)
  const [isCheckingCards, setIsCheckingCards] = useState(false)
  const [isPaused, setIsPaused] = useState(true)

  const { difficulty } = useTypedSelector(({ GameConfig }) => GameConfig)

  const {
    hoursText,
    minutesText,
    secondsText,
    onStartTimer,
    onStopTimer,
    onPauseTimer,
  } = useTimer()

  return (
    <GameContext.Provider
      value={{
        difficulty,
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
        isCheckingCards,
        setIsCheckingCards,
        isShowingWinModal,
        setIsShowingWinModal,
        hoursText,
        minutesText,
        secondsText,
        onStartTimer,
        onStopTimer,
        onPauseTimer,
      }}
    >
      <Container>
        <GameCards />
        <GameControlBar />
        <GameWinMessage />
      </Container>
    </GameContext.Provider>
  )
}

export default Game
