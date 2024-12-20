import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test';

  apiData: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    const apiUtl = 'https://jsonplaceholder.typicode.com/users';
    this.http.get(apiUtl).subscribe(
      (data) => {
        console.log(data);
        this.apiData = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
