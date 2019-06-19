import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectServices } from "../../services/project.services";
import { Global } from '../../services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectServices]
})
export class ProjectsComponent implements OnInit {
public projects:Project[];
public url:string;
  constructor(
    private _projectService: ProjectServices
  ) {
    this.url=Global.url 
   }

  ngOnInit() {
    this.getProjects() 
  }
  getProjects() {
    this._projectService.getProjects().subscribe(response => {
      if(response.projects){
        this.projects=response.projects;
        console.log( this.projects)
      }
    }, error => {
      console.log(error);
    })
  }
}
