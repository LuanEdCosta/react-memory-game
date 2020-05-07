export type GameConfigPayload = {
  difficulty: number
}

export enum GameConfigActionTypes {
  SET_GAME_CONFIG = 'SET_GAME_CONFIG',
}

export type GameConfigAction = {
  type: GameConfigActionTypes.SET_GAME_CONFIG
  payload: GameConfigPayload
}
