import { createContext } from 'react'
import { GameContextValue } from './types'

export default createContext<GameContextValue>({
  difficulty: 0,
  isPaused: true,
  setIsPaused: () => undefined,
  iconList: [],
  setIconList: () => undefined,
  iconFoundList: [],
  firstSelectedCard: -1,
  secondSelectedCard: -1,
  isCheckingCards: false,
  setIconFoundList: () => undefined,
  setFirstSelectedCard: () => undefined,
  setSecondSelectedCard: () => undefined,
  setIsCheckingCards: () => undefined,
})
