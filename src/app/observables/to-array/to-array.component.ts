import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { interval } from "rxjs/internal/observable/interval";
import { take, toArray } from "rxjs/operators";

@Component({
  selector: "app-to-array",
  templateUrl: "./to-array.component.html",
  styleUrls: ["./to-array.component.css"]
})
export class ToArrayComponent implements OnInit {
  Subs: Subscription;
  constructor() {}

  ngOnInit() {
    const source = interval(1000);
    this.Subs = source
    .pipe(take(5),
      toArray())
    .subscribe(res => {
      console.log(res);
    });
  }
}
