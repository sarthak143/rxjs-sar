import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-subject',
  // templateUrl: './async-subject.component.html',
  template: `
    <h1>Tour of Heroes</h1>
    <app-hero-main [hero]="hero"></app-hero-main>
  `,
  styleUrls: ['./async-subject.component.css'],
})
export class AsyncSubjectComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
