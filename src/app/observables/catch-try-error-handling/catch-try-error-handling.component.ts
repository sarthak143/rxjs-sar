import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catch-try-error-handling',
  // templateUrl: './catch-try-error-handling.component.html',
  template: `
    <h1>Tour of Heroes</h1>
    <app-hero-main [hero]="hero"></app-hero-main>
  `,
  styleUrls: ['./catch-try-error-handling.component.css'],
})
export class CatchTryErrorHandlingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
