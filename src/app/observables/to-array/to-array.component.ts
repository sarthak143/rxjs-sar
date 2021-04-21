import { Component, OnInit } from "@angular/core";
import { of, Subscription } from "rxjs";
import { interval } from "rxjs/internal/observable/interval";
import { take, toArray } from "rxjs/operators";
import { AddListElementService } from "../../service/add-list-element.service";

@Component({
  selector: "app-to-array",
  templateUrl: "./to-array.component.html",
  styleUrls: ["./to-array.component.css"]
})
export class ToArrayComponent implements OnInit {
  Subs: Subscription;
  constructor(private addel: AddListElementService) {}

  ngOnInit() {
    // example 1
    const source = interval(1000);
    this.Subs = source
      .pipe(
        take(5),
        toArray()
      )
      .subscribe(res => {
        console.log(res);
        this.addel.addList(res, "appendlist");
      });
    // example 2
    const obs1 = of("apple", "mango", "cherry");
    obs1.pipe(toArray()).subscribe(res => {
      this.addel.addList(res, "appendlist1");
    });
  }
}
