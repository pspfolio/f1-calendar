import fetch from 'isomorphic-fetch'
import * as actionTypes from '../constants/actionTypes';

export function fetchGrandPrixAndQualifyingResults(raceId) {
  return (dispatch, getState) => {
    return dispatch(fetchGrandPrixIfNeeded(raceId))
  }
}

function fetchGrandPrixIfNeeded(raceId) {
  return (dispatch, getState) => {
    if (shouldFetchGrandPrix(getState(), raceId)) {
      return dispatch(fetchGrandPrix(raceId)).then(() => {
        return dispatch(fetchQualifying(raceId))
      })
    }
  }
}

function setGrandPrix(data) {
    const race = data.MRData.RaceTable.Races[0]
    return {
        type: actionTypes.GRANDPRIX_SET,
        grandPrix: {
            name: race.raceName,
            round: race.round,
            date: race.date,
            results: race.Results,
            circuit: race.Circuit
        }
    }
}

function setQualifying(data) {
  const qualifying = data.MRData.RaceTable.Races[0]
  return {
    type: actionTypes.QUALIFYING_SET,
    results: qualifying.QualifyingResults,
    round: qualifying.round
  }
}

function shouldFetchGrandPrix(state, raceId) {
    var race = state.grandprixs.filter(gp => gp.round === raceId)
    return race.length === 0
}

function fetchGrandPrix(id) {
  return dispatch => {
  return fetch(`http://ergast.com/api/f1/current/${id}/results.json`)
    .then(response => response.json())
    .then(json => {
      if(json.MRData.RaceTable.Races.length > 0) {
        return dispatch(setGrandPrix(json))
      }
    })
  }
}

function fetchQualifying(id) {
  return dispatch => {
    return fetch(`http://ergast.com/api/f1/current/${id}/qualifying.json`)
      .then(response => response.json())
      .then(json => {
        if(json.MRData.RaceTable.Races.length > 0) {
          return dispatch(setQualifying(json))
        }
      })
  }
}
