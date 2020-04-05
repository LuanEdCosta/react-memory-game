import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { ThemePayload } from '../types/Theme'

interface RootState {
  Theme: ThemePayload
}

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default useTypedSelector
