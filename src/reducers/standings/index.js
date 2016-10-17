import * as actionTypes from '../../constants/actionTypes'

const initialState = {
  driverstandings: [],
  constructorstandings: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.DRIVERSTANDINGS_SET:
    case actionTypes.CONSTRUCTORSTANDINGS_SET:
      return Object.assign({}, state, {
        [action.name]: [...state[action.name], ...action.data]
      })
      return result
    default:
      return state
  }
}
