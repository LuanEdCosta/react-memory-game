import { useContext } from 'react'
import { useArrayShuffle } from '../../hooks'
import GameContext from './GameContext'
import IconList from './IconList'

type ClearGameStateFunction = () => void

export default (): ClearGameStateFunction => {
  const {
    setIconList,
    setIconFoundList,
    setIsPaused,
    setFirstSelectedCard,
    setSecondSelectedCard,
    difficulty,
  } = useContext(GameContext)

  const onShuffleArray = useArrayShuffle<string>()

  const onClearGameState = (): void => {
    setIconFoundList([])
    setIsPaused(true)
    setFirstSelectedCard(-1)
    setSecondSelectedCard(-1)

    const shuffledArray = onShuffleArray(IconList)
    let correctLengthArray = shuffledArray.slice(0, difficulty / 2)
    correctLengthArray = correctLengthArray.concat(correctLengthArray)
    const correctLengthSuffledArray = onShuffleArray(correctLengthArray)
    setIconList(correctLengthSuffledArray)
  }

  return onClearGameState
}
