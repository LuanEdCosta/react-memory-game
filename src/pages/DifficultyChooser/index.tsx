import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GameLocationState } from '../Game/types'
import { useDispatch } from 'react-redux'
import { setTheme } from '../../store/actions'
import { useTypedSelector } from '../../hooks'
import { ThemeTypes } from '../../types/Theme'
import {
  Container,
  MenuContainer,
  MenuContent,
  AppName,
  DifficultyContainer,
  DifficultyLabelContainer,
  DifficultyLabelSubtitle,
  DifficultyLabelTitle,
  SwitchThemesButton,
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
  const dispatch = useDispatch()
  const history = useHistory()
  const themeType = useTypedSelector(({ Theme }) => Theme.type)

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

  const onSwitchThemes = (): void => {
    const isUsingDark = themeType === ThemeTypes.dark
    const newThemeType = isUsingDark ? ThemeTypes.light : ThemeTypes.dark
    const action = setTheme({ type: newThemeType })
    dispatch(action)
  }

  return (
    <Container>
      <MenuContainer>
        <AppName>React Memory Game</AppName>

        <MenuContent>
          <DifficultyLabelContainer>
            <DifficultyLabel>
              <DifficultyLabelTitle>Choose a Difficulty:</DifficultyLabelTitle>
              <DifficultyLabelSubtitle>
                Each difficulty changes the number of cards
              </DifficultyLabelSubtitle>
            </DifficultyLabel>

            <SwitchThemesButton onClick={onSwitchThemes} title="Trocar Temas">
              <FontAwesomeIcon icon="palette" />
            </SwitchThemesButton>
          </DifficultyLabelContainer>

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
