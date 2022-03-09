import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merge-map',
  template: `
  <h1>Tour of Heroes</h1>
  <app-hero-main [hero]="hero"></app-hero-main>
`,
  styleUrls: ['./merge-map.component.css'],
})
export class MergeMapComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
