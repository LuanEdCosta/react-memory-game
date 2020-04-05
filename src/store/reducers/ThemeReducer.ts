import { THEME_KEY } from '../../config/StorageKeys'
import {
  ThemePayload,
  ThemeTypes,
  ThemeType,
  ThemeAction,
  ThemeActionTypes,
} from '../../types/Theme'

const themeType =
  (localStorage.getItem(THEME_KEY) as ThemeType) || ThemeTypes.dark

const initialState: ThemePayload = {
  type: themeType,
}

export default (
  state: ThemePayload = initialState,
  action: ThemeAction,
): ThemePayload => {
  const { type, payload } = action

  switch (type) {
    case ThemeActionTypes.SET_THEME:
      return { ...state, ...payload }
    default:
      return state
  }
}
