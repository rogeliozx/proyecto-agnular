import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() anchura: number;
  @Input('etiquetas') captions: boolean;
  @Output() getAuthor = new EventEmitter;
  //variables
  public autor: any;
  constructor() {
    this.autor = {
      nombre: "Rogelio Romero",
      website: "rogelioltz.mx",
      linkedin: "https://www.linkedin.com/in/rogelio-romero-sanchez-a8114b14a/"
    }
  }

  ngOnInit() {
    console.log(this.anchura)




    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: this.anchura,
      responsive: true,
      speed: 100

    });
    
  }
  ngAfterViewInit() {
//envio datos en el momento justo despues acoplacion componente
this.getAuthor.emit(this.autor);
  }
  herencia(event){
  
    

  }

}
