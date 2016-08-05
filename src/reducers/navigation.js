import * as actionTypes from '../constants/actionTypes';

const initialState = [];

export default function(state = initialState, action) {
    switch(action.type) {
        case actionTypes.NAVIGATION_SET:
            return setNavigation(state, action);
        case actionTypes.NAVIGATION_SET_ACTIVE:
            return state.map(t => setNavigationActive(t, action))
        default:
            return state;
    }
}

function setNavigation(state, action) {
    const { navData } = action;
    return [...state, ...navData ];
}

function setNavigationActive(state, action) {
    const { name: stateName } = state;
    const { name: newName } = action;
    if(stateName.toLowerCase() !== newName.toLowerCase() && !state.active) {
        return state;
    }

    if(stateName.toLowerCase() !== newName.toLowerCase() && state.active) {
        return setActive(state, false);
    }

    return setActive(state, true);
}

function setActive(state, active) {
    return Object.assign({}, state, { active })
}
