import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tap',
  // templateUrl: './tap.component.html',
  template: `
    <h1>Tour of Heroes</h1>
    <app-hero-main [hero]="hero"></app-hero-main>
  `,
  styleUrls: ['./tap.component.css'],
})
export class TapComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
