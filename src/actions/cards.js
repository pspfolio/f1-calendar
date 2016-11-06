import fetch from 'isomorphic-fetch'
import * as actionTypes from '../constants/actionTypes';

export function fetchCardsIfNeeded() {
  return (dispatch, getState) => {
    if (getState().cards.length === 0) {
      return dispatch(fetchCards())
    }
  }
}

function fetchCards() {
  return dispatch => {
    return fetch('http://ergast.com/api/f1/current.json')
      .then(response => response.json())
      .then(json => dispatch(setCards(json)))
  }
}

function setCards(cards) {
  return {
    type: actionTypes.CARDS_SET,
    cardData: cards.MRData.RaceTable.Races.map(card => {
      return {
        raceName: card.raceName,
        circuit: card.Circuit,
        date: card.date,
        round: card.round
      }
    })
  }
}
