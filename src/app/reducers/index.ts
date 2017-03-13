import {
  combineReducers
} from '@ngrx/store'
import {createSelector} from 'reselect';

import * as fromActors from './actors.reducer';
import { ActionReducer } from '@ngrx/store';
import {compose} from "@ngrx/core/compose";


export interface State {
  results: fromActors.State;
}


/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
const reducers = {
  results: fromActors.default
};


export default compose(combineReducers)({
  results: reducers.results
});


export const getActorsState = (state: State) => state.results;

