import React from 'react'
import { expect } from 'chai'
import * as actions from '../../actions'
import grandPrixReducer from './index'

describe('Grandprix reducer', () => {

  it('sets initial state', () => {
    const state = grandPrixReducer(undefined, { type: '@@redux/INIT'})
    expect(state).to.deep.equal([])
  })

  it('sets grandprix GRANDPRIX_SET', () => {
    const gpName = 'italian'
    const action = actions.setGrandPrix(gpName)
    const state = grandPrixReducer(undefined, action)
    expect(state.length).to.be.equal(1);
    expect(state[0].name).to.be.equal(gpName)
  })

  it('adds grandprix to state', () => {
    const gpName = 'belgium'
    const action = actions.setGrandPrix(gpName)
    const initialState = [{
      name: 'italian',
      date: '19.20.1988',
      winner: 'Kimi Raikkonen',
      gpResults: [ 'Kimi Raikkonen', 'Sebastian Vettel' ]
    }]
    const state = grandPrixReducer(initialState, action)
    expect(state.length).to.be.equal(2)
    expect(state[1].name).to.be.equal(gpName)

  });

});
