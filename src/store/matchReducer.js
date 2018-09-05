import {FETCH_MATCHES} from './types';

const matchReducer = (state = [], action) => {
    switch(action.type) {
        case FETCH_MATCHES:
            return [...state, action.payload];
        default:
          return state;
    }
}

export default matchReducer;
