import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-home-results',
  templateUrl: './home-results.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeResults{
  @Input() actors: Object;
  @Input() movies: Array<Object>;
  constructor() {
  }
}
