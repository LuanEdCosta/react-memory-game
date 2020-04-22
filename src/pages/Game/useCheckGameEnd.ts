import { useEffect, useContext } from 'react'
import GameContext from './GameContext'

export default (): void => {
  const {
    iconFoundList,
    difficulty,
    setIsShowingWinModal,
    setIsPaused,
    onPauseTimer,
  } = useContext(GameContext)

  useEffect(() => {
    if (iconFoundList.length === difficulty / 2) {
      setIsShowingWinModal(true)
      setIsPaused(true)
      onPauseTimer()
    }
  }, [
    difficulty,
    iconFoundList.length,
    onPauseTimer,
    setIsPaused,
    setIsShowingWinModal,
  ])
}
