export enum ThemeTypes {
  dark = 'dark',
  light = 'light',
}

export type ThemeType = ThemeTypes.dark | ThemeTypes.light

export type ThemePayload = {
  type: ThemeType
}

export enum ThemeActionTypes {
  SET_THEME = 'SET_THEME',
}

export type ThemeAction = {
  type: ThemeActionTypes.SET_THEME
  payload: ThemePayload
}
