import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concat-map',
  template: `
  <h1>Tour of Heroes</h1>
  <app-hero-main [hero]="hero"></app-hero-main>
`,
  styleUrls: ['./concat-map.component.css'],
})
export class ConcatMapComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
