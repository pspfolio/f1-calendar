import * as actionTypes from '../../constants/actionTypes'

const initialState = {
  driverstandings: [],
  constructorstandings: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.DRIVERSTANDINGS_SET:
      return Object.assign({}, state, {
        driverstandings: [...state.driverstandings, ...action.data]
      })
      return result;
    case actionTypes.CONSTRUCTORSTANDINGS_SET:
      return Object.assign({}, state, {
        constructorstandings: [...state.constructorstandings, ...action.data]
      })
      return result
    default:
      return state
  }
}

function standings(state, action) {
  return [...state, ...action.data]
}
