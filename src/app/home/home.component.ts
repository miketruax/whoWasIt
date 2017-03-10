import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie-service.service'
import * as fromRoot from "../reducers";
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
  private actors: Observable<String[]>;
  constructor(private movieService: MovieService, store: Store<fromRoot.State>) {
    this.actors = store.select('actors');
    this.movies = [{movie: ''}];
  }
  addItem(){
  this.movies.push({movie: ''});
    console.log(this.movies);
  }
  removeMovie(index) {
    this.movies.splice(index, 1);
    if(this.movies.length <=0){
      this.movies.push('');
    }
  }

  search(){
    this.movies.forEach((v,i, array)=>{
      console.log(array[i]);
      this.movieService.getMovies(v['movie']);
    })

  }
  ngOnInit() {
  }

}
