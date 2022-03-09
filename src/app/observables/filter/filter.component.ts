import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  template: `
    <h1>Tour of Heroes</h1>
    <app-hero-main [hero]="hero"></app-hero-main>
  `,
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
