import {Injectable, Inject} from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";
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
    //API call to OMDB to retrieve actor information on movies entered
    compareMovies(title: String, year: number, page: number = 1){
          let params: URLSearchParams =  new URLSearchParams();
          params.set('t', title.toString());
          params.set('apikey', '25c98aaf');
          if(year) {
            params.set('y', year.toString());
            params.set('page', page.toString());
          }
          params.set('r', 'JSON');
          //retreives movie information based off movie string and converts to json
          this.http.get('http://www.omdbapi.com/', {search: params})
            .map(res => res.json())
            .map(res => {
              //If actors exist on response AND actors populated (not N/A), adds actors array to state
              if(res['Actors'] && res['Actors'] !== "N/A"){
                return {actors: res['Actors'].split(', '), movies: {title: title, valid: true, msg: ""} }
              }
              //If response is valid but no actors, movie is added but with messaging reflecting lack of actors
              else if(res['Response'] !== "False"){
                return {actors: [], movies: {title: title, valid: false, msg: "actors not populated on OMDB for this title"}}
              }
              //Catch all in case response from OMDB was invalid (due to wrong title or issue with API)
              else {
                return {actors: [], movies: {title: title, valid: false, msg: "could not get title from OMDBApi either"}}
              }
            })
            .map(payload => ({ type: ActorActions.ADD_ACTORS, payload }))
            //Adds information to state with actor list
            .subscribe(action => {
              this.store.dispatch(action);
              this.store.dispatch({type: ActorActions.COMBINE_ACTORS});
            });
      }



    }


