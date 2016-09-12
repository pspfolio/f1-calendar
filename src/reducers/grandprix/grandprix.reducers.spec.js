import React from 'react'
import { expect } from 'chai'
import * as actions from '../../actions'
import * as actionTypes from '../../constants/actionTypes';
import grandPrixReducer from './index'

describe('Grandprix reducer', () => {

  const gp = {
    name: 'Australia',
    round: '1',
    circuit: 'Albert Park',
    results: ['Kimi Raikkonen', 'Sebastian Vettel']
  }

  it('sets initial state', () => {
    const state = grandPrixReducer(undefined, { type: '@@redux/INIT'})
    expect(state).to.deep.equal([])
  })

  it('sets grandprix GRANDPRIX_SET', () => {
    const action = {
      type: actionTypes.GRANDPRIX_SET,
      grandPrix: gp
    }
    const state = grandPrixReducer(undefined, action)
    expect(state.length).to.be.equal(1);
    expect(state[0].name).to.be.equal(gp.name)
  })

  it('adds grandprix to state', () => {
    const action = {
      type: actionTypes.GRANDPRIX_SET,
      grandPrix: gp
    }
    const initialState = [{
      name: 'italian',
      round: '2',
      circuit: 'Kimi Raikkonen',
      results: [ 'Kimi Raikkonen', 'Sebastian Vettel' ]
    }]
    const state = grandPrixReducer(initialState, action)
    expect(state.length).to.be.equal(2)
    expect(state[1].name).to.be.equal(gp.name)

  });

});
