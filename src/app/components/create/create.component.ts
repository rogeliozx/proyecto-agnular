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
public status:String;

  constructor(
    private _projectServices:ProjectServices
  ) {
    this.title="Crear proyectó";
    this.project=new Project('','','','',2019,'','');
   }

  ngOnInit() {
  }
  onSubmit(form){
   
    this._projectServices.saveProject(this.project).subscribe(
      response=>{
        if(response.project){
          this.status='success';
          form.reset();
        }else{
          this.status='failed';
        }
        console.log(response);
      },error=>{
        console.log(<any>error)
      }

    );
  }

}
