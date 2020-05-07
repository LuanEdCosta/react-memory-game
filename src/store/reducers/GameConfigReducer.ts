import DIFFICULTIES from '../../config/Difficulties'
import {
  GameConfigAction,
  GameConfigPayload,
  GameConfigActionTypes,
} from '../../types/GameConfig'

const initialState = {
  difficulty: DIFFICULTIES.MEDIUM,
}

export default (
  state = initialState,
  action: GameConfigAction,
): GameConfigPayload => {
  const { type, payload } = action

  switch (type) {
    case GameConfigActionTypes.SET_GAME_CONFIG:
      return { ...state, ...payload }
    default:
      return state
  }
}
