import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from "@angular/core";
import { fromEvent } from "rxjs";

@Component({
  selector: "app-from-event",
  templateUrl: "./from-event.component.html",
  styleUrls: ["./from-event.component.css"]
})
export class FromEventComponent implements OnInit, AfterViewInit {
  constructor() {}

  @ViewChild("addBtn") addBtn: ElementRef;

  ngOnInit() {}
  ngAfterViewInit() {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, "click").subscribe(res => {
      console.log(res);
      let PrintValue = "List Item" + count++;
      this.addList(PrintValue);
    });
  }
}
