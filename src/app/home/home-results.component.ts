import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-home-results',
  templateUrl: './home-results.component.html',
})
export class HomeResults{
  @Input() results: Array<Array<String>>;
  @Input() movies: Array<Object>;
  constructor() {
  }
}
