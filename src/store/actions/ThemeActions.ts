import { THEME_KEY } from '../../config/StorageKeys'
import {
  ThemePayload,
  ThemeAction,
  ThemeActionTypes,
  ThemeTypes,
} from '../../types/Theme'

export const setTheme = (payload: ThemePayload): ThemeAction => {
  const { type } = payload || {}

  localStorage.setItem(THEME_KEY, type || ThemeTypes.dark)

  return {
    type: ThemeActionTypes.SET_THEME,
    payload,
  }
}
