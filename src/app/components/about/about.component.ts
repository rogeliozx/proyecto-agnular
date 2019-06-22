import { Component, OnInit } from '@angular/core';

declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  
})
export class AboutComponent implements OnInit {
public title:string;
public subtitle:string;
public email:string;

  constructor() { 
 this.title="Rogelio Romero";
 this.subtitle="Desarrollador web";
 this.email="rogelioltz@gmail.com";

  }
ngOnInit(){
 
 
}
 
   
  

}
