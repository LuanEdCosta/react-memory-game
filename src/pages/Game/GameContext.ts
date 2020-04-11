import { createContext } from 'react'
import { GameContextValue } from './types'

export default createContext<GameContextValue>({
  difficulty: 0,
  isPaused: true,
  setIsPaused: () => undefined,
  imageList: [],
  setImageList: () => undefined,
})
