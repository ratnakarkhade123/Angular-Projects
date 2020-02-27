import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  countries:String[];
  togglelist:boolean;
  hasTableClass:boolean;

  myclasses = {
    "c1":true,
    "c2":false
  };
  constructor() {
    this.togglelist=true;

   }

  ngOnInit(): void {
    this.countries=["India","Spain","Indonesia","Japan","Germany"]
  }

  onToggle():void{
    this.togglelist=!this.togglelist;
  
  }

  onSave(country)
  {
    this.countries.push(country)
    
  }

  onChange():void
  {
    this.hasTableClass=!this.hasTableClass;
    this.myclasses = {
      "c1":false,
      "c2":true
    }
  }
}
