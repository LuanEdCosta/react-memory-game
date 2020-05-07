import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { ThemePayload } from '../types/Theme'
import { GameConfigPayload } from '../types/GameConfig'

interface RootState {
  Theme: ThemePayload
  GameConfig: GameConfigPayload
}

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default useTypedSelector
