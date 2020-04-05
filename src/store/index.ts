import { createStore, combineReducers } from 'redux'
import ThemeReducer from './reducers/ThemeReducer'

const Store = combineReducers({
  Theme: ThemeReducer,
})

export default createStore(Store)
