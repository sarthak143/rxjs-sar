import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flat-map',
  // templateUrl: './flat-map.component.html',
  template: `
    <h1>Tour of Heroes</h1>
    <app-hero-main [hero]="hero"></app-hero-main>
  `,
  styleUrls: ['./flat-map.component.css'],
})
export class FlatMapComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
