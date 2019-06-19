import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from '../models/project';
import {Global} from '../services/global';

@Injectable()
export class ProjectServices{
    public url:string;
    public header
    constructor(
        private _http:HttpClient
    ){
        this.url=Global.url;
    }
    testServices(){
        return 'Probando las cosas';
    }
    saveProject(project:Project):Observable<any>{
        let params=JSON.stringify(project);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        console.log(headers)
        return this._http.post(this.url+'save-project',params,{headers:headers});
    }
    getProjects():Observable<any>{
        let header= new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'all',{headers:header});
    }
    getProject(id):Observable<any>{
        let header= new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'project/'+id,{headers:header});
    }
    deleteProject(id):Observable<any>{
        let header= new HttpHeaders().set('Content-Type','application/json');
        return this._http.delete(this.url+'del/'+id,{headers:this.header})
    }
    updateProject(project):Observable<any>{
        let params=JSON.stringify(project)
        console.log(params)
        let header= new HttpHeaders().set('Content-Type','application/json');
        return this._http.put(this.url+'edit/'+project._id,params,{headers:header})
    }
}