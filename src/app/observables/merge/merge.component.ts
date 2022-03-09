import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merge',
  // templateUrl: './merge.component.html',
  template: `
    <h1>Tour of Heroes</h1>
    <app-hero-main [hero]="hero"></app-hero-main>
  `,
  styleUrls: ['./merge.component.css'],
})
export class MergeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
