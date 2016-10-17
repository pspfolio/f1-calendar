import { combineReducers } from 'redux'
import navigation from './navigation'
import grandprixs from './grandprix'
import standings from './standings'

export default combineReducers({
    grandprixs,
    navigation,
    standings
})
