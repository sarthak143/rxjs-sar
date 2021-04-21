import { Component, OnInit } from "@angular/core";
import { PostsService } from "./posts.service";

@Component({
  selector: "app-promise",
  templateUrl: "./promise.component.html"
  // styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  api: string;
  data: any;

  //constructor(public ps: PostsService) {}

  ngOnInit() {
    // this.ps.getPosts();
    // this.data = this.ps.data;
    // this.api = this.ps.api;
    // console.log(this.data);
  }
}
