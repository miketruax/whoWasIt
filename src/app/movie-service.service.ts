import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class MovieService {
  constructor(private http: Http) { }
  private returnData(results:Array<Object>){
      let actorsInCommon = results[0]['Actors'].split(', ');
      console.log(actorsInCommon);
      results.forEach((e, i, results) => {
        let actors = e['Actors'].split(', ');
        actorsInCommon.forEach((e,i, actorsInCommon)=>{
          if(actors.indexOf(e) === -1){
            actorsInCommon.splice(i, 1);
          }
        });
      });
      console.log(actorsInCommon);
  }
    getMovies(movies: Array<Object>){
      let x = movies.length;
      let results = [];

      movies.forEach((e, i, array) =>{
        if(e['movie']) {
          this.http.get('http://www.omdbapi.com/?t=' + array[i]['movie'] + '&y=&plot=short&r=json')
            .map(res => res.json())
            .subscribe(response => {
              x--;
              results.push(response);
              if (x <= 0) {
                return this.returnData(results);
              }
            })
        } else{
          x--;
        }
        })

      }



    }


