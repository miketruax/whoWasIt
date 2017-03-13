import { Action } from '@ngrx/store';
import  * as actor  from '../actions/actor.actions';
import {forEach} from "@angular/router/src/utils/collection";

export type State = Object

const initialState: State = {actors: [], movieNum: -1, movies: []};


export default
  function(state = initialState, action: Action): any{
    switch (action.type) {
      case actor.ActorActions.CLEAR_ACTORS: {
        return {actors: [], movieNum: action.payload, movies: []}
      }
      case actor.ActorActions.ADD_ACTORS : {
        return {actors: state['actors'].concat(action.payload.actors), movieNum: state['movieNum']-1, movies: state['movies'].concat(action.payload.movies)}
      }
      case actor.ActorActions.COMBINE_ACTORS : {
        if(state['movieNum'] >0){
         return state
        }
        else{
          let dupl = state['actors'].reduce(function(dupl, v, i, arr) {
            if (arr.indexOf(v, i + 1) !== -1 && dupl.indexOf(v) === -1) {
              dupl.push(v);
            }
            return dupl;
          }, []);
          console.log(state);
          return {actors: dupl, movieNum: state['movieNum'], movies: state['movies']}
        }

      }

      default:
        return state;
    }
  };


