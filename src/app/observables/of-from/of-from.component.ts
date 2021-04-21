import { Component, OnInit } from "@angular/core";
import { of } from "rxjs";
import { AddListElementService } from "../../service/add-list-element.service";

@Component({
  selector: "app-of-from",
  templateUrl: "./of-from.component.html",
  styleUrls: ["./of-from.component.css"]
})
export class OfFromComponent implements OnInit {
  constructor(private addel: AddListElementService) {}

  ngOnInit() {
    const obs1 = of("apple", "mango", "cherry");
    obs1.subscribe(res => {
      this.addel.addList(res, "appendlist1");
    });

    const obs2 = of({ a: "apple", b: "mango", c: "cherry" });
    obs2.subscribe(res => {
     this.addel.addList(res,"appendlist1");
    });
  }
}
