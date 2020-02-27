import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my Angular app';
  today:Date=new Date;
  flowers:string[]=["Rose","Jasmine","Lotus","Lily","Chameli"]
  msg:string;
  age:number;
}
