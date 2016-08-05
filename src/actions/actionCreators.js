import * as actionTypes from '../constants/actionTypes';

export function setNavigation(navData) {
    return {
        type: actionTypes.NAVIGATION_SET,
        navData
    };
};

export function setNavigationToActive(name) {
    return {
        type: actionTypes.NAVIGATION_SET_ACTIVE,
        name
    }
};
