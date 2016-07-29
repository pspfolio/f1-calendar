import * as actionTypes from '../constants/actionTypes';

export function setNavigation(navData) {
    return {
        type: actionTypes.NAVIGATION_SET,
        navData
    };
};
