import { Component, OnInit } from '@angular/core';
import {Project} from  '../../models/project';
import {ProjectServices} from '../../services/project.services';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProjectServices]
})
export class CreateComponent implements OnInit {
public title:string;
public project:Project;

  constructor(
    private _projectServices:ProjectServices
  ) {
    this.title="Crear proyectó";
    this.project=new Project('','','','',2019,'','');
   }

  ngOnInit() {
  }
  onSubmit(form){
    console.log( this.project);
  }

}
