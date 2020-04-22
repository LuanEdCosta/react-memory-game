import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useClearGameState from '../useClearGameState'
import GameContext from '../GameContext'
import {
  Container,
  LeftSideContainer,
  BackButton,
  DifficultyIndicator,
  RightSideContainer,
  Timer,
  TimerText,
  PlayPauseButton,
  RestartButton,
  ButtonText,
} from './styles'

const GameControlBar: React.FC = () => {
  const {
    difficulty,
    isPaused,
    setIsPaused,
    hoursText,
    minutesText,
    secondsText,
    onStartTimer,
    onPauseTimer,
  } = useContext(GameContext)

  const onClearGameState = useClearGameState()
  const history = useHistory()

  useEffect(onClearGameState, [])

  const onPlayPause = (): void => {
    setIsPaused(!isPaused)
    if (isPaused) onStartTimer()
    else onPauseTimer()
  }

  const onReturnToMenu = (): void => {
    const playerWantsToLeave = window.confirm(
      'Do you want to leave this awesome game?',
    )

    if (playerWantsToLeave) history.goBack()
  }

  const onRestart = (): void => {
    if (isPaused) onClearGameState()
  }

  return (
    <Container>
      <LeftSideContainer>
        <BackButton onClick={onReturnToMenu}>
          <FontAwesomeIcon icon="chevron-left" />
        </BackButton>

        <DifficultyIndicator>
          {`Playing with ${difficulty} cards`}
        </DifficultyIndicator>
      </LeftSideContainer>

      <RightSideContainer>
        <Timer>
          <FontAwesomeIcon icon="clock" />
          <TimerText>{`${hoursText}:${minutesText}:${secondsText}`}</TimerText>
        </Timer>

        <PlayPauseButton onClick={onPlayPause}>
          <FontAwesomeIcon icon={isPaused ? 'play' : 'pause'} />
        </PlayPauseButton>

        <RestartButton isPaused={isPaused} onClick={onRestart}>
          <FontAwesomeIcon icon="undo" />
          <ButtonText>Restart</ButtonText>
        </RestartButton>
      </RightSideContainer>
    </Container>
  )
}

export default GameControlBar
