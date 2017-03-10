import { Action } from '@ngrx/store';
import  * as actor  from '../actions/actor.actions';

export type State = Array<String>

const initialState: State = [];


export default
  function(state = initialState, action: Action): any{
    switch (action.type) {
      case actor.ActorActions.SET_ACTORS: {
        return action.payload
      }
      case actor.ActorActions.CLEAR_ACTORS: {
        return []
      }
      case actor.ActorActions.ADD_ACTORS : {
        return state.concat(action.payload)
      }
      default:
        return state;
    }
  };


