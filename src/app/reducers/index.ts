import {
  combineReducers
} from '@ngrx/store'

import * as fromActors from './actors.reducer';
import { ActionReducer } from '@ngrx/store';
import {compose} from "@ngrx/core/compose";


export interface State {
  results: fromActors.State;
}

const reducers = {
  results: fromActors.actorReducer
};


export default compose(combineReducers)({
  results: reducers.results
});


export const getActorsState = (state: State) => state.results;

