import { combineReducers } from 'redux'
import cards from './cards'
import grandprixs from './grandprix'
import standings from './standings'

export default combineReducers({
    grandprixs,
    cards,
    standings
})
