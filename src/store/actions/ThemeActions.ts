import { ThemePayload, ThemeAction, ThemeActionTypes } from '../../types/Theme'

export const setTheme = (payload: ThemePayload): ThemeAction => ({
  type: ThemeActionTypes.SET_THEME,
  payload,
})
