import React from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux'
import { setTheme, setGameConfig } from '../../store/actions'
import DIFFICULTIES from '../../config/Difficulties'
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

const DifficultyChooser: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const themeType = useTypedSelector(({ Theme }) => Theme.type)

  const selectedDifficulty = useTypedSelector(
    ({ GameConfig }) => GameConfig.difficulty,
  )

  const onSelectDifficulty = (difficulty: number) => (): void => {
    const action = setGameConfig({ difficulty })
    dispatch(action)
  }

  const onPlay = (): void => {
    history.push('/game')
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
