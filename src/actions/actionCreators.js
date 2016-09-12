import fetch from 'isomorphic-fetch'
import * as actionTypes from '../constants/actionTypes';

export function fetchGrandPrixIfNeeded(raceId) {
  return (dispatch, getState) => {
    if (shouldFetchGrandPrix(getState(), raceId)) {
      return dispatch(fetchGrandPrix(raceId))
    }
  }
}

function setGrandPrix(data) {
    var race = data.MRData.RaceTable.Races[0]
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

function shouldFetchGrandPrix(state, raceId) {
    var race = state.grandprixs.filter(gp => gp.round === raceId)
    return race.length === 0
}

function fetchGrandPrix(id) {
  return dispatch => {
  return fetch(`http://ergast.com/api/f1/current/${id}/results.json`)
    .then(response => response.json())
    .then(json => dispatch(setGrandPrix(json)))
  }
}

/*
  NAVIGATION
*/

export function fetchNavigationIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchNavigation(getState())) {
      return dispatch(fetchNavigation())
    }
  }
}

function setNavigation(navData) {
  return {
    type: actionTypes.NAVIGATION_SET,
    navData: navData.MRData.RaceTable.Races.map(nav => {
      return {
        country: nav.Circuit.Location.country,
        date: nav.date,
        round: nav.round
      }
    })
  }
}

function fetchNavigation() {
  return dispatch => {
    return fetch('http://ergast.com/api/f1/current.json')
      .then(response => response.json())
      .then(json => dispatch(setNavigation(json)))
  }
}

function shouldFetchNavigation(state) {
  const nav = state.navigation
  if(nav.length === 0) {
    return true
  } else {
    return false
  }
}
