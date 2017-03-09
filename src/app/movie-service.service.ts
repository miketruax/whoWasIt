import {Injectable, Inject} from '@angular/core';
import {Http} from "@angular/http";
import {State} from "./reducers/index";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import {ActorActions} from "./actions/actor.actions";


@Injectable()
export class MovieService {
  actors: Observable<Array<String>>;
  constructor(private http: Http, private store: Store<State>) {
    this.actors = store.select('actors');
  }
  private returnData(results:Array<Object>){
      let actorsInCommon = results[0]['Actors'].split(', ');
      results.forEach((e, i, results) => {
        let actors = e['Actors'].split(', ');
        actorsInCommon.forEach((e,i, actorsInCommon)=>{
          if(actors.indexOf(e) === -1){
            actorsInCommon.splice(i, 1);
          }
        });
      });
      return actorsInCommon;
  }
    getMovies(movies: Array<Object>){
      let x = movies.length;
      let results = [];
      let actors = [];
      if(x<1){
      }
      movies.forEach((e, i, array) =>{
        if(e['movie']) {
          this.http.get('http://www.omdbapi.com/?t=' + array[i]['movie'] + '&y=&plot=short&r=json')
            .map(res => res.json())
            .subscribe(response => {
              // x--;
              // results.push(response);
              // if (x <= 0) {
              //   let actors = this.returnData(results);
                this.store.dispatch({type: ActorActions.ADD_ACTORS, payload: response['actors']});
              // }
            })
        } else{
          x--;
        }
        })

      }



    }


