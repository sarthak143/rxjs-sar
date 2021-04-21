import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

class Post {
  constructor(
    public userId: number,
    public id: string,
    public title: string,
    public body: string
  ) {}
}

@Injectable()
export class PostsService {
  api: string = "https://jsonplaceholder.typicode.com/posts";
  data = [];

  constructor(private http: HttpClient) {}
  getPosts() {
    const promise = new Promise<void>((resolve, reject) => {
      const apiURL = this.api;
      this.http
        .get<Post[]>(apiURL)
        .toPromise()
        .then(
          (res: any) => {
            // Success
            this.data = res.map((res: any) => {
              return new Post(res.userId, res.id, res.title, res.body);
            });
            // console.log(this.data);
            resolve();
          },
          err => {
            // Error
            reject(err);
          }
        );
    });
    return promise;
  }
}
