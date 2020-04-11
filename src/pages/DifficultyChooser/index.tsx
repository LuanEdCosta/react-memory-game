import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { GameLocationState } from '../Game/types'
import {
  Container,
  MenuContainer,
  MenuContent,
  AppName,
  DifficultyContainer,
  DifficultyLabel,
  Difficulty,
  PlayButton,
  PlayButtonContainer,
} from './styles'

const DIFFICULTIES = {
  EASY: 12,
  MEDIUM: 20,
  HARD: 28,
  VERY_HARD: 32,
}

const DifficultyChooser: React.FC = () => {
  const history = useHistory()

  const [selectedDifficulty, setSelectedDifficulty] = useState(
    DIFFICULTIES.MEDIUM,
  )

  const onSelectDifficulty = (difficulty: number) => (): void => {
    setSelectedDifficulty(difficulty)
  }

  const onPlay = (): void => {
    const gameLocationState: GameLocationState = {
      difficulty: selectedDifficulty,
    }

    history.push('/game', gameLocationState)
  }

  return (
    <Container>
      <MenuContainer>
        <AppName>React Memory Game</AppName>

        <MenuContent>
          <DifficultyLabel>Choose a Difficulty:</DifficultyLabel>
          <div>Each difficulty changes the number of cards</div>

          <DifficultyContainer>
            <Difficulty
              name="Easy"
              numOfCards={DIFFICULTIES.EASY}
              onClick={onSelectDifficulty(DIFFICULTIES.EASY)}
              isSelected={selectedDifficulty === DIFFICULTIES.EASY}
            />
            <Difficulty
              name="Medium"
              numOfCards={DIFFICULTIES.MEDIUM}
              onClick={onSelectDifficulty(DIFFICULTIES.MEDIUM)}
              isSelected={selectedDifficulty === DIFFICULTIES.MEDIUM}
            />
            <Difficulty
              name="Hard"
              numOfCards={DIFFICULTIES.HARD}
              onClick={onSelectDifficulty(DIFFICULTIES.HARD)}
              isSelected={selectedDifficulty === DIFFICULTIES.HARD}
            />
            <Difficulty
              name="Very hard"
              numOfCards={DIFFICULTIES.VERY_HARD}
              onClick={onSelectDifficulty(DIFFICULTIES.VERY_HARD)}
              isSelected={selectedDifficulty === DIFFICULTIES.VERY_HARD}
            />
          </DifficultyContainer>

          <PlayButtonContainer>
            <PlayButton onClick={onPlay}>Play</PlayButton>
          </PlayButtonContainer>
        </MenuContent>
      </MenuContainer>
    </Container>
  )
}

export default DifficultyChooser
