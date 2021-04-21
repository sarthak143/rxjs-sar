import { Component, OnInit } from "@angular/core";
import { from, of } from "rxjs";
import { AddListElementService } from "../../service/add-list-element.service";

@Component({
  selector: "app-of-from",
  templateUrl: "./of-from.component.html",
  styleUrls: ["./of-from.component.css"]
})
export class OfFromComponent implements OnInit {
  ObsMsg;
  constructor(private addel: AddListElementService) {}

  ngOnInit() {
    const obs1 = of("apple", "mango", "cherry");
    obs1.subscribe(res => {
      this.addel.addList(res, "appendlist1");
    });

    const obs2 = of({ a: "apple", b: "mango", c: "cherry" });
    obs2.subscribe(res => {
      this.ObsMsg = res;
      let jsonRes = JSON.stringify(res); //covert obj to json
      this.addel.addList(jsonRes, "appendlist2");
    });
    // from is used for array as parameters
    const obs3 = from(["apple", "mango", "cherry"]);
    obs3.subscribe(res => {
      this.addel.addList(res, "appendlist3");
    });

    // from Promise to observaable

    const promiss = new Promise(res => {
      setTimeout(() => {
        res("resolved promiss");
      }, 3000);
    });
    const obs4 = from(promiss);
    obs4.subscribe(res => {
      this.addel.addList(res, "appendlist4");
    });

    //from stringify
    const obs5 = from("hello");
    obs5.subscribe(res => {
      this.addel.addList(res, "appendlist5");
    });
  }
}
