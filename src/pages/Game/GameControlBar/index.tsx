import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GameContext from '../GameContext'
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
import { useHistory } from 'react-router-dom'

const GameControlBar: React.FC = () => {
  const history = useHistory()

  const { difficulty, isPaused, setIsPaused } = useContext<GameContextValue>(
    GameContext,
  )

  const onPlayPause = (): void => {
    if (setIsPaused) setIsPaused(!isPaused)
  }

  const onReturnToMenu = (): void => {
    const playerWantsToLeave = window.confirm(
      'Do you want to leave this awesome game?',
    )

    if (playerWantsToLeave) history.goBack()
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
          <TimerText>00:00:00</TimerText>
        </Timer>

        <PlayPauseButton onClick={onPlayPause}>
          <FontAwesomeIcon icon={isPaused ? 'play' : 'pause'} />
        </PlayPauseButton>

        <RestartButton isPaused={isPaused}>
          <FontAwesomeIcon icon="undo" />
          <ButtonText>Restart</ButtonText>
        </RestartButton>
      </RightSideContainer>
    </Container>
  )
}

export default GameControlBar
