import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectServices } from "../../services/project.services";
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectServices]
})
export class DetailComponent implements OnInit {
  public url: string;
  public project: Project;
  public confirm: boolean;
  constructor(
    private _projectServices: ProjectServices,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = Global.url;
    this.confirm = false;
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
  deleteProject(id) {
    this._projectServices.deleteProject(id).subscribe(response => {

      this._router.navigate(['/proyectos'])

    }, error => console.log(<any>error))
  }
  setConfirm(confirm) {
    this.confirm = confirm;
  }
}
