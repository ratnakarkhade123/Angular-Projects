import { Component, OnInit } from '@angular/core';
import { findLast } from '@angular/compiler/src/directive_resolver';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  cities:string[];
  toggleList:boolean;

  constructor() {
    this.toggleList=false;
   }

  ngOnInit(): void {
    this.cities=["Pune","Mumbai","Kolkata","Bengluru","Hydrabad","Chennai","Satara"]
  }

  onShow():void{
    this.toggleList=true;
  }

onHide():void{
  this.toggleList=false;
}

onToggle():void{
  this.toggleList=!this.toggleList;
}

onSave(city)
{
  this.cities.push(city)
}
onSave1(city)
{
  this.cities.unshift(city)
}

onDel()
{
this.cities.shift();
}

onDel1()
{
 this.cities.pop();
}


onDelet(city)
{
 let x= this.cities.indexOf(city);

  this.cities.splice(x,1);
}

}
