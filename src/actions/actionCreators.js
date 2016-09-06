import fetch from 'isomorphic-fetch'
import * as actionTypes from '../constants/actionTypes';

export function setNavigation(navData) {
    return {
        type: actionTypes.NAVIGATION_SET,
        navData: navData.MRData.RaceTable.Races
    }
}

export function setGrandPrix(name) {
    // TODO FETCH DATA HERE with name
    return {
        type: actionTypes.GRANDPRIX_SET,
        grandPrix: {
            name,
            date: '19.20.1988',
            winner: 'Kimi Raikkonen',
            gpResults: ['Kimi Raikkonen', 'Sebastian Vettel']
        }
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

export function fetchNavigationIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchNavigation(getState())) {
      return dispatch(fetchNavigation())
    }
  }
}
