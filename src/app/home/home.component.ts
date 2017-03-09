import { Component, OnInit } from '@angular/core';
import {HomeResults} from './home-results.component'
import {MovieService} from '../movie-service.service'
import {State} from "../reducers";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  providers: [MovieService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private movies: Array<Object>;
  public actors: Observable<string[]>;
  constructor(private movieService: MovieService, store: Store<State>) {
    this.actors = store.select('actors');
    this.movies = [{movie: ''}];
  }
  addItem(){
  this.movies.push({movie: ''})
  }
  removeMovie(index) {
    this.movies.splice(index, 1);
    if(this.movies.length <=0){
      this.movies.push({movie: ''});
    }
  }

  search(){

    this.movieService.getMovies(this.movies);
  }
  ngOnInit() {
  }

}
