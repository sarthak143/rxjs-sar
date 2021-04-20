import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit {

  constructor() { }

  @ViewChild() addBtn: ElementRef;

  ngOnInit() {
        fromEvent(button, 'click'){

        }
  }

}