import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class AddListElementService {
  constructor() {}
  addList(PrintValue: string) {
    let el = document.createElement("li");
    el.classList.add("list-group-item");
    el.innerText = PrintValue;
    document.getElementById("appendlist").appendChild(el);
  }
}
