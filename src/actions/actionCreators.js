import * as actionTypes from '../constants/actionTypes';

export function setNavigation(navData) {
    return {
        type: actionTypes.NAVIGATION_SET,
        navData
    };
};

export function setGrandPrix(name) {
    // TODO FETCH DATA HERE with name
    return {
        type: actionTypes.GRANDPRIX_SET,
        grandPrix: {
            name: 'Spanish',
            date: '19.20.1988',
            winner: 'Kimi Raikkonen',
            gpResults: ['Kimi Raikkonen', 'Sebastian Vettel']
        }
    }
}
