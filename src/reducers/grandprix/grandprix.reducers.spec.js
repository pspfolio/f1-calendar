import React from 'react'
import { expect } from 'chai'
import * as actions from '../../actions'
import grandPrixReducer from './index'

describe('Grandprix reducer', () => {

  it('sets initial state', () => {
    const state = grandPrixReducer(undefined, { type: '@@redux/INIT'})
    expect(state).to.deep.equal([])
  });

});
