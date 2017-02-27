import { Component, OnInit } from '@angular/core';
import {HomeResults} from './home-results.component'
import {MovieService} from '../movie-service.service'

@Component({
  selector: 'app-home',
  providers: [MovieService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private movies: Array<Object>;
  public results: Array<Array<String>>;
  constructor(private movieService: MovieService) {
    this.results = [[]];
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
