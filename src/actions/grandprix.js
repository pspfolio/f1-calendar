import fetch from 'isomorphic-fetch'
import * as actionTypes from '../constants/actionTypes'
import { apiBaseUrl } from '../constants'

export function fetchGrandPrixAndQualifyingResults(raceId) {
  return (dispatch, getState) => {
    if (shouldFetchGrandPrix(getState(), raceId)) {
      return Promise.all([
        dispatch(fetchData(`${apiBaseUrl}/${raceId}/results.json`, setGrandPrix)),
        dispatch(fetchData(`${apiBaseUrl}/${raceId}/qualifying.json`, setQualifying))
      ])
    }
  }
}

function shouldFetchGrandPrix(state, raceId) {
    var race = state.grandprixs.filter(gp => gp.round === raceId)
    return race.length === 0
}

function fetchData(url, setFunc) {
  return dispatch => {
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        if(json.MRData.RaceTable.Races.length > 0) {
          const result = json.MRData.RaceTable.Races[0]
          return dispatch(setFunc(result))
        }
      })
    }
}

function setGrandPrix(data) {
    return {
        type: actionTypes.GRANDPRIX_SET,
        grandPrix: {
            name: data.raceName,
            round: data.round,
            date: data.date,
            results: data.Results,
            circuit: data.Circuit
        }
    }
}

function setQualifying(data) {
  return {
    type: actionTypes.QUALIFYING_SET,
    results: data.QualifyingResults,
    round: data.round
  }
}
