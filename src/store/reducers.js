import { combineReducers } from 'redux';

import * as matchReducer from './matchReducer';

export const rootReducer = combineReducers({
    matchReducer:matchReducer.matchReducer
})

export const initialState = combineReducers({
    initialState:matchReducer.initialState
})
  
export default rootReducer