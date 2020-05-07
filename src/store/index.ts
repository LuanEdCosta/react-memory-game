import { createStore, combineReducers } from 'redux'
import ThemeReducer from './reducers/ThemeReducer'
import GameConfigReducer from './reducers/GameConfigReducer'

const Store = combineReducers({
  Theme: ThemeReducer,
  GameConfig: GameConfigReducer,
})

export default createStore(Store)
