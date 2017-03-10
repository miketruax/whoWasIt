import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-home-results',
  templateUrl: './home-results.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeResults{
  @Input() actors: string[];
  @Input() movies: Array<String>;
  constructor() {
  }
}
