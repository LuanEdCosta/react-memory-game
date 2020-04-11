import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GameContext from '../GameContext'
import { useTimer } from '../../../hooks'
import { GameContextValue } from '../types'
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
  const history = useHistory()

  const { difficulty, isPaused, setIsPaused } = useContext<GameContextValue>(
    GameContext,
  )

  const {
    hoursText,
    minutesText,
    secondsText,
    onStartTimer,
    onStopTimer,
    onPauseTimer,
  } = useTimer()

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
    if (isPaused) {
      onStopTimer()
    }
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
