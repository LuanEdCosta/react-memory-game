import { createContext } from 'react'
import { GameContextValue } from './types'

export default createContext<GameContextValue>({
  difficulty: 0,
  isPaused: true,
  setIsPaused: () => undefined,
  iconList: [],
  setIconList: () => undefined,
  iconFoundList: [],
  setIconFoundList: () => undefined,
  firstSelectedCard: -1,
  setFirstSelectedCard: () => undefined,
  secondSelectedCard: -1,
  setSecondSelectedCard: () => undefined,
  isCheckingCards: false,
  setIsCheckingCards: () => undefined,
  isShowingWinModal: false,
  setIsShowingWinModal: () => undefined,
})
