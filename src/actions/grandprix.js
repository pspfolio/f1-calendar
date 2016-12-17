import fetch from 'isomorphic-fetch'
import * as actionTypes from '../constants/actionTypes'
import { apiBaseUrl } from '../constants'

export function fetchGrandPrixAndQualifyingResults(raceId) {
  return (dispatch, getState) => {
    if (shouldFetchGrandPrix(getState(), raceId)) {
      return Promise.all([
        fetchData(`${apiBaseUrl}/${raceId}/results.json`),
        fetchData(`${apiBaseUrl}/${raceId}/qualifying.json`)
      ]).then((item) => {
        dispatch(setGrandPrix(item[0], item[1]))
      })
    }
  }
}

function shouldFetchGrandPrix(state, raceId) {
    var race = state.grandprixs.filter(gp => gp.round === raceId)
    return race.length === 0
}

function fetchData(url) {
  return fetch(url).then(response => response.json())
}

function setGrandPrix(raceResults, qualifyingResults) {
  const race = raceResults.MRData.RaceTable.Races[0]
  const qualifying = qualifyingResults.MRData.RaceTable.Races[0]
  return {
    type: actionTypes.GRANDPRIX_SET,
    grandPrix: {
      name: race.raceName,
      round: race.round,
      date: race.date,
      results: race.Results,
      circuit: race.Circuit,
      qualifying: {
        results: qualifying.QualifyingResults,
      }
    }
  }
}
