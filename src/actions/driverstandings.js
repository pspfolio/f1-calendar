import fetch from 'isomorphic-fetch'
import * as actionTypes from '../constants/actionTypes'

export function fetchDriverStandingsIfNeeded() {
  return (dispatch, getState) => {
    if(getState().driverstandings && getState().driverstandings.length === 0) {
      return dispatch(fetchDriverstandings())
    }
  }
}

function fetchDriverstandings() {
  return dispatch => {
    return fetch('http://ergast.com/api/f1/current/driverStandings.json')
      .then((response) => {
        return response.json()})
      .then(json => dispatch(setDriverstandings(json)))
  }
}

function setDriverstandings(data) {
  var standings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings
  return {
    type: actionTypes.DRIVERSTANDINGS_SET,
    data: standings
  }
}
