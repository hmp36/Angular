import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MEAN';
  data: [string];
  b: string;
  c: string;
  d: [string];
  e: string

  onButtonClick(): void {
    console.log(`Click event is working`);
    this.d = this.data
  }

  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    this.getTaskFromService()
  }
  getTaskFromService() {
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      //console.log("Congrats!got your data!", data)
      this.data = data['data'];
      this.b = data['data'][2].title
      this.c = data['data'][2].description

    })
  }
}
