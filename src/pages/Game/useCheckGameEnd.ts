import { useEffect, useContext } from 'react'
import GameContext from './GameContext'

export default (): void => {
  const {
    iconFoundList,
    difficulty,
    setIsShowingWinModal,
    setIsPaused,
  } = useContext(GameContext)

  useEffect(() => {
    if (iconFoundList.length === difficulty / 2) {
      setIsShowingWinModal(true)
      setIsPaused(true)
    }
  }, [difficulty, iconFoundList.length, setIsPaused, setIsShowingWinModal])
}
