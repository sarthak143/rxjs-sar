import { Component, OnInit } from "@angular/core";
import { interval, Subscription } from "rxjs";

@Component({
  selector: "app-timer-interval",
  templateUrl: "./timer-interval.component.html",
  styleUrls: ["./timer-interval.component.css"]
})
export class TimerIntervalComponent implements OnInit {
  obsMsg;
  videoSubs: Subscription;
  constructor() {}

  ngOnInit() {
    const broadcastVideo = interval(1000);
    this.videoSubs = broadcastVideo.subscribe(res => {
      console.log(res);
      this.obsMsg = "Video" + res;
      if (res >= 5) {
        this.videoSubs.unsubscribe();
      }
    });
  }
}
