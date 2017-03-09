import {
  combineReducers
} from '@ngrx/store'

import * as fromActors from './actors.reducer';
import { ActionReducer } from '@ngrx/store';


export interface State {
  actors: fromActors.State;
}


/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
const reducers = {
  actors: fromActors.reducer
};

const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return productionReducer(state, action);

}

export default (state: any, action: any) => {
  return productionReducer
}
