import React from 'react'
import { expect } from 'chai'
import * as actionTypes from '../../constants/actionTypes'
import StandingReducer from './index'

describe('standing reducer', () => {

  it('sets initial state', () => {
    const state = StandingReducer(undefined, '@@redux/INIT')
    expect(state).to.deep.equal({
      driverStandings: [],
      constructorStandings: []
    })
  })

  it('sets driverStanding', () => {
    const action = {
      type: actionTypes.DRIVERSTANDINGS_SET,
      data: ['test1'],
      name: 'driverStandings'
    }
    const state = StandingReducer(undefined, action)

    expect(state.driverStandings.length).to.be.equal(1)
  })

})
