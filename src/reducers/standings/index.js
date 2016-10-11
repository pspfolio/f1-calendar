import * as actionTypes from '../../constants/actionTypes'

const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.DRIVERSTANDINGS_SET:
        return [...state, ...action.data]
    default:
      return state
  }
}
