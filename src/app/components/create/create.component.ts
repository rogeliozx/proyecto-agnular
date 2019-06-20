import { Component, OnInit } from '@angular/core';
import {Project} from  '../../models/project';
import {ProjectServices} from '../../services/project.services';
import {UploadServices} from '../../services/upload.services';
import { Global } from '../../services/global';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProjectServices,UploadServices]
})
export class CreateComponent implements OnInit {
public title:string;
public project:Project;
public status:String;
public filesToUpload:Array<File>
public save:string;

  constructor(
    private _projectServices:ProjectServices,
    private _uploadService:UploadServices
  ) {
    this.title="Crear proyectó";
    this.project=new Project('','','','',2019,'','');
    
   }

  ngOnInit() {
  }
  onSubmit(form){
   //Guardar los datos
    this._projectServices.saveProject(this.project).subscribe(
      response=>{
        if(response.project){
          
          //subir la imagen
          if(this.filesToUpload){

        
          this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id,[],this.filesToUpload,'image')
          .then((result:any)=>
          {
            this.status='success';
            this.save=result.project;
           
            form.reset();
          });
        }else{
          this.status='success';
            this.save=response.project;
           
        }
        }else{
          this.status='failed';
        }
      
      },error=>{
        console.log(<any>error)
      }

    );
  }
  fileChangeEvent(fileinput:any){
    this.filesToUpload=<Array<File>>fileinput.target.files;
  }

}
