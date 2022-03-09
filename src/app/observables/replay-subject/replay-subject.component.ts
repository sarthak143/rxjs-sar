import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-replay-subject',
  // templateUrl: './replay-subject.component.html',
  template: `
    <h1>Tour of Heroes</h1>
    <app-hero-main [hero]="hero"></app-hero-main>
  `,
  styleUrls: ['./replay-subject.component.css'],
})
export class ReplaySubjectComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
