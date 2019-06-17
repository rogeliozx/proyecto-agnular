import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from '../models/project';
import {Global} from '../services/global';

@Injectable()
export class ProjectServices{
    public url:string;
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
}