import * as types from './types';

export const initialState = {
    matches: {}
}

export const matchReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.FETCH_MATCHES:
          return { ...state, matches: action.payload}
        default:
          return state;
    }
}

