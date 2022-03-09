import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debounce-time-distinct-unit-changed',
  // templateUrl: './debounce-time-distinct-unit-changed.component.html',
  template: `
    <h1>Tour of Heroes</h1>
    <app-hero-main [hero]="hero"></app-hero-main>
  `,
  styleUrls: ['./debounce-time-distinct-unit-changed.component.css'],
})
export class DebounceTimeDistinctUnitChangedComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
