import { Component, OnInit } from "@angular/core";
import { interval, Subscription } from "rxjs";
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
    const source = interval(200);
    this.Subs = source.pipe(map(data => data * 10)).subscribe(res => {
      console.log(res);
      this.addel.addList(res, "appendlist");
    });
  }
}
