import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {

  constructor(private http:HttpClient){
    this.http.get("http://localhost:5000").subscribe(data=>console.log(data))
  }

}
