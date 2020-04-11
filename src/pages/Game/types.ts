export type GameLocationState = {
  difficulty: number
}

export type GameContextValue = {
  difficulty: number
  isPaused: boolean
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>
  imageList: string[]
  setImageList: React.Dispatch<React.SetStateAction<string[]>>
}
