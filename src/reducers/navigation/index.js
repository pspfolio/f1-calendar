import * as actionTypes from '../../constants/actionTypes';

const initialState = [];

export default function(state = initialState, action) {
    switch(action.type) {
        case actionTypes.NAVIGATION_SET:
            return setNavigation(state, action);
        default:
            return state;
    }
}

function setNavigation(state, action) {
    const { navData } = action;
    return [...state, ...navData ];
}
