import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class MovieService {
  constructor(private http: Http) { }
  private returnData(r:Array<Object>){

  }
    getMovies(movies: Array<Object>){
      let x = movies.length;
      let results = [{}];

      movies.forEach((e, i, array) =>{
        this.http.get('http://www.omdbapi.com/?t='+array[i]['movie']+'&y=&plot=short&r=json')
          // .map(res => res.json())
          .subscribe(response => {
            console.log(response, 'http://www.omdbapi.com/?t='+array[i]['movie']+'&y=&plot=short&r=json')
            x--;
            results.push(response);
            if(x<=0){
              this.returnData(results);
            }
          })
          })
      }



    }


