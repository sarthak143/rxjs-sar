import { Component, OnInit } from "@angular/core";
import { from, interval, Observable, Subscription } from "rxjs";
import { map, take, toArray } from "rxjs/operators";
import { AddListElementService } from "../../service/add-list-element.service";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  Subs: Subscription;
  constructor(private addel: AddListElementService) {}

  ngOnInit() {
    //example 1
    const source = interval(200);
    this.Subs = source
      .pipe(
        take(5),
        map(data => "data transformed b4 subsription " + data * 10)
      )
      .subscribe(res => {
        console.log(res);
        this.addel.addList(res, "appendlist");
      });
    //example 2

    const members = from([
      { id: 1, name: "sarthak" },
      { id: 2, name: "rahul" },
      { id: 3, name: "rohit" }
    ]);
    members.pipe(map(data => data.name)).subscribe(res => {
      console.log(res);
      this.addel.addList(res, "appendlist1");
    });
  }
}
