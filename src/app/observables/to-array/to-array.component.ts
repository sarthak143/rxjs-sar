import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { interval } from "rxjs/internal/observable/interval";

@Component({
  selector: "app-to-array",
  templateUrl: "./to-array.component.html",
  styleUrls: ["./to-array.component.css"]
})
export class ToArrayComponent implements OnInit {
  let Subs:Subscription;
  obsMsg;
  constructor() {}

  ngOnInit() {
    const broadcastVideo = interval(1000);
    this.Subs = broadcastVideo.subscribe(res => {
      console.log(res);
      this.obsMsg = "Video " + res;
      this.addel.addList(this.obsMsg, "appendlist");
      if (res >= 5) {
        this.Subs.unsubscribe();
      }
    });
  }
}

