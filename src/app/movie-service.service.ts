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
    this.actors = store.select('results');
  }
    getMovies(movie: String){
          this.http.get('http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&r=json')
            .map(res => res.json())
            .map(res => {
              console.log(res);
              if(res['Actors'] && res['Actors'] !== "N/A"){
                return {actors: res['Actors'].split(', '), movies: {title: movie, valid: true, msg: ""} }
              }
              else if(res['Response'] !== "False"){
                return {actors: [], movies: {title: movie, valid: false, msg: "actors not populated on OMDB for this title"}}
              }
              else {
                return {actors: [], movies: {title: movie, valid: false, msg: "could not get title from OMDBApi either"}}
              }
            })
            .map(payload => ({ type: ActorActions.ADD_ACTORS, payload }))
            .subscribe(action => {
              console.log(action.payload);
              this.store.dispatch(action);
              this.store.dispatch({type: ActorActions.COMBINE_ACTORS});
            });
      }



    }


