import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie-service.service'
import * as fromRoot from "../reducers";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {ActorActions} from "../actions/actor.actions";


@Component({
  selector: 'app-home',
  providers: [MovieService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private movies: Array<Object>;
  private results: Observable<String[]>;
  private tooFew: boolean;
  constructor(private movieService: MovieService, private store: Store<fromRoot.State>) {
    this.tooFew = false;
    this.results = store.select('results');
    this.movies = [{movie: ''}, {movie: ''}];
  }
  addItem(){
  this.movies.push({movie: ''});
  }
  removeMovie(index) {
    this.movies.splice(index, 1);
    if(this.movies.length <=0){
      this.movies.push('');
    }
  }

  search(){
    this.tooFew = false;
    this.blankClearer();
    if(!this.tooFew) {
      this.store.dispatch({type: ActorActions.CLEAR_ACTORS, payload: this.movies.length});
      this.movies.forEach((v, i, array) => {
        this.movieService.getMovies(v['movie']);
      })
    }
  }
  clear(){
    this.tooFew = false;
    this.store.dispatch({type: ActorActions.CLEAR_ACTORS, payload: -1})
  }

  blankClearer(){
    let returnList = [];
    let l = this.movies.length;
    this.movies.forEach((v, i, array)=>{
      if(v['movie']){
        returnList.push(v);
      }
    });
    if (returnList.length <2) {
      this.tooFew = true;
      returnList.length === 1 ? returnList.push({movie: ''}) : returnList.push({movie: ''}, {movie: ''});
    }
    this.movies = returnList.slice();
  }
  ngOnInit() {
  }

}
