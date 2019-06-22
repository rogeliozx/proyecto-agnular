import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit,AfterViewInit {
public widthSlider:number=0;
public anchuraToSlider:number;
public captions:boolean;
public author:object;
@ViewChild('texto',{static:true}) textos:ElementRef;
  constructor() {
    this.captions=false
   }
   //inicia antes del oninit por extraer informacion del doom

   ngAfterViewInit(){
    console.log(this.textos.nativeElement.textContent);
       }
  ngOnInit() {
  
  }
  
    cargarSlider(){
      this.anchuraToSlider=this.widthSlider;
    }
    resetearSlider(){
      this.anchuraToSlider=null;
    }
    getHerencia(event){
   
     this.author=event
    }

}
