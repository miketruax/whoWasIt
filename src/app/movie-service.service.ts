import {Injectable, Inject} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import * as fromRoot from './reducers'
import {ActorActions} from "./actions/actor.actions";


@Injectable()
export class MovieService {
  actors: Observable<Array<String>>;
  constructor(private http: Http, private store: Store<fromRoot.State>) {
    this.actors = store.select('actors');
  }
    getMovies(movie: String){
          this.store.dispatch({type: ActorActions.CLEAR_ACTORS});
          this.http.get('http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&r=json')
            .map(res =>
              res.json()['Actors'].split(',')
            )
            .map(payload => ({ type: ActorActions.ADD_ACTORS, payload }))
            .subscribe(action => {

              this.store.dispatch(action)

            });
      }



    }


