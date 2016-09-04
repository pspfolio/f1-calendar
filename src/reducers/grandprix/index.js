import { GRANDPRIX_SET } from '../../constants/actionTypes';

const initalState = [];

export default function(state = initalState, action) {
    switch (action.type) {
        case GRANDPRIX_SET:
            return [...state, grandPrix(undefined, action)]
        default:
            return state;
    }
}

/* TODO pohdi onko järkevää toteuttaa näin,
    vain pelkästään function setGrandPrix,
    jos ei tule muita grandprix actioneita */
function grandPrix(state, action) {
  console.log('action', action);
    switch (action.type) {
        case GRANDPRIX_SET:
            return {
                name: action.grandPrix.name,
                winner: action.grandPrix.winner,
                gpResults: action.grandPrix.gpResults
            }
        default:
            return state
    }
}
