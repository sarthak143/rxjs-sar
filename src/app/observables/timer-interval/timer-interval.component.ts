import { Component, OnInit } from "@angular/core";
import { interval, Subscription, timer } from "rxjs";
import { AddListElementService } from "../../service/add-list-element.service";

@Component({
  selector: "app-timer-interval",
  templateUrl: "./timer-interval.component.html",
  styleUrls: ["./timer-interval.component.css"]
})
export class TimerIntervalComponent implements OnInit {
  obsMsg;
  videoSubs: Subscription;
  constructor(private addel: AddListElementService) {}

  ngOnInit() {
    const broadcastVideo = interval(1000);
    // timer(delay, interval) interval after a preset delay.
    const broadcastVideoAfterDelay = timer(5000, 1000);
    this.videoSubs = broadcastVideo.subscribe(res => {
      console.log(res);
      this.obsMsg = "Video " + res;
      this.addel.addList(this.obsMsg, "appendlist");
      if (res >= 5) {
        this.videoSubs.unsubscribe();
      }
    });
    this.videoSubs = broadcastVideoAfterDelay.subscribe(res => {
      console.log(res);
      this.obsMsg = "Video " + res;
      this.addel.addList(this.obsMsg, "appendlist");
      if (res >= 5) {
        this.videoSubs.unsubscribe();
      }
    });
  }
}
