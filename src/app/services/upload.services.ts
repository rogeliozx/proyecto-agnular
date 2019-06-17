import { Injectable } from "@angular/core";
import { Global } from "./global";

@Injectable()

export class UploadServices{
    public url:string
    constructor(){
            this.url=Global.url;
    }
     makeFileRequest(url:string, params:Array<string>,files:Array<File>,name:string){

     }
}