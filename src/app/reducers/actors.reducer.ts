import { Action } from '@ngrx/store';
import  * as actor  from '../actions/actor.actions';


export type State = {
  actors: string[];
}

const initialState: State = {
  actors: []
};


export const reducer =
  function(state: State = initialState, action: Action): State {
    switch (action.type) {
      case actor.ActorActions.SET_ACTORS: {
        return {
          actors: Object.assign({}, state.actors, {
            actors: action.payload
          })
        };
      }
      case actor.ActorActions.CLEAR_ACTORS: {
        return {actors: []}
      }
      case actor.ActorActions.ADD_ACTORS : {
        console.log('Reducer hit');
        return {
          actors: state.actors.concat(action.payload)
        }
      }

      default:
        return state;
    }
  };

export const getActors = (state): State => state.actors;
