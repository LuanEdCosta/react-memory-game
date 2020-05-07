import {
  GameConfigActionTypes,
  GameConfigAction,
  GameConfigPayload,
} from '../../types/GameConfig'

export const setGameConfig = (
  payload: GameConfigPayload,
): GameConfigAction => ({
  type: GameConfigActionTypes.SET_GAME_CONFIG,
  payload,
})
