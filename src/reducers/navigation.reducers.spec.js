import React from 'react';
import { expect } from 'chai';
import * as actions from '../actions';
import NavigationReducer from './navigation';


describe('Navigation reducer', () => {

    const navData = [
        {
            time:'22 - 24 Jul',
            name: 'Spanish',
            active: true
        },
        {
            time: '15 - 18 Oct',
            name: 'Italian',
            active: false
        },
        {
            time: '15 - 18 Oct',
            name: 'Belgium',
            active: false
        }
    ];

    it('sets navigation object property active to true', () => {
        const name = 'Belgium';
        const action = actions.setNavigationToActive(name);
        const result = NavigationReducer(navData, action)
                        .filter(t => t.name === name);
        expect(result[0].active).to.equal(true);
    }),

    it('sets navigation object property active to false when other property is set to true', () => {
        const name = 'Belgium';
        const action = actions.setNavigationToActive(name);
        const result = NavigationReducer(navData, action);
        expect(result.filter(t => t.name === 'Spanish')[0].active).to.equal(false);
        expect(result.filter(t => t.name === name)[0].active).to.equal(true);
    })
});
