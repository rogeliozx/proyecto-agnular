import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectServices } from '../../services/project.services';
import { UploadServices } from '../../services/upload.services';
import { Global } from '../../services/global';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectServices, UploadServices]
})
export class EditComponent implements OnInit {
  public title: string;
  public project: Project;
  public status: String;
  public filesToUpload: Array<File>
  public save: string;
  public url = Global.url;
  constructor(
    private _projectServices: ProjectServices,
    private _uploadService: UploadServices,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = "Editar Proyecto";
    this.project = new Project('', '', '', '', 2019, '', '');

  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params.id
      this.getProject(id);
    });
  }
  getProject(id) {
    this._projectServices.getProject(id).subscribe(response => {
      this.project = response.project
    }, error => {
      console.log(error);
    })
  }
  onSubmit() {
    this._projectServices.updateProject(this.project).subscribe(response => {
      if (response.project) {

        //subir la imagen
        if (this.filesToUpload) {
          this._uploadService.makeFileRequest(Global.url + "upload-image/" + response.project._id, [], this.filesToUpload, 'image')
            .then((result: any) => {
              this.status = 'success';
              this.save = result.project;
              console.log(this.save)

            });
        } else {
          this.status = 'success';
          this.save = response.project;
          console.log(this.save)
        }

      } else {
        this.status = 'failed';
      }

    }, error => {
      console.log(<any>error)
    })
  }
  fileChangeEvent(fileinput: any) {
    this.filesToUpload = <Array<File>>fileinput.target.files;
  }
}
