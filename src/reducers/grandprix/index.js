import { GRANDPRIX_SET } from '../../constants/actionTypes';

const initalState = [];

export default function(state = initalState, action) {
    switch (action.type) {
        case GRANDPRIX_SET:
          return [...state, grandPrix(state, action)]
        default:
          return state;
    }
}

function grandPrix(state, action) {
  const { grandPrix } = action
  return {
    name: grandPrix.name,
    round: grandPrix.round,
    circuit: grandPrix.circuit,
    results: grandPrix.results,
    qualifying: {
      results: grandPrix.qualifying.results,
      round: grandPrix.round
    }
  }
}
