import fetch from 'isomorphic-fetch'
import * as actionTypes from '../constants/actionTypes';

export function fetchNavigationIfNeeded() {
  return (dispatch, getState) => {
    console.log('nav length', getState().navigation)
    if (getState().navigation.length === 0) {
      return dispatch(fetchNavigation())
    }
  }
}

function fetchNavigation() {
  console.log('fetch nav')
  return dispatch => {
    return fetch('http://ergast.com/api/f1/current.json')
      .then(response => response.json())
      .then(json => dispatch(setNavigation(json)))
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
