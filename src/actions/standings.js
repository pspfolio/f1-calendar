import fetch from 'isomorphic-fetch'
import * as actionTypes from '../constants/actionTypes'
import * as uri from '../constants/'

export function fetchStandingsIfNeeded() {
  return (dispatch, getState) => {
    if(getState().standings.driverStandings && getState().standings.driverStandings.length === 0) {
      return dispatch(fetchStandings(uri.driverStandingsUrl, setDriverStandings)).then(() => {
        return dispatch(fetchStandings(uri.constructorStandingsUrl, setConstructorStandings))
      })
    }
  }
}

function fetchStandings(uri, createAction) {
  return dispatch => {
    return fetch(uri)
      .then(response => response.json())
      .then(json => dispatch(createAction(json)))
  }
}

function setDriverStandings(data) {
  const { DriverStandings } = data.MRData.StandingsTable.StandingsLists[0]
  return {
    type: actionTypes.DRIVERSTANDINGS_SET,
    data: DriverStandings,
    name: 'driverStandings'
  }
}

function setConstructorStandings(data) {
  const { ConstructorStandings } = data.MRData.StandingsTable.StandingsLists[0]
  return {
    type: actionTypes.CONSTRUCTORSTANDINGS_SET,
    data: ConstructorStandings,
    name: 'constructorStandings'
  }
}
