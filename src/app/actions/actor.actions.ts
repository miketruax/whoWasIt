import {
  Action,
} from '@ngrx/store';
import {Injectable} from "@angular/core";

@Injectable()
export class ActorActions {
  static CLEAR_ACTORS = '[Actors] Load Heroes';
  clearActors(): Action {
    return {
      type: ActorActions.CLEAR_ACTORS
    };
  }

  static SET_ACTORS = '[Actors] Set Actors';
  setActors(actors): Action {
    return {
      type: ActorActions.SET_ACTORS,
      payload: actors
    };
  }

  static ADD_ACTORS = '[Actors] Add Actors';
  addActors(actors): Action {
    return {
      type: ActorActions.ADD_ACTORS,
      payload: actors
    };
  }

}
