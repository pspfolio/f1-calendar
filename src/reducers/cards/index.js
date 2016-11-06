import * as actionTypes from '../../constants/actionTypes';

const initialState = [];

export default function(state = initialState, action) {
    switch(action.type) {
        case actionTypes.CARDS_SET:
            return setCards(state, action);
        default:
            return state;
    }
}

function setCards(state, action) {
    const { cardData } = action;
    return [...state, ...cardData ];
}
