import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {map} from "rxjs/operator/map";
import { Contact } from "../model/model.contact";


@Injectable()
export class ContactService{

constructor(private http:Http){

}

chercher(motcle:string,size:number,page:number){
  return this.http.get("http://localhost:8282/chercherContact?mc="
  +motcle+"&size="+size+"&page="+page)
  .map(resp=>resp.json());
 }

 saveContact(contact:Contact){
  return this.http.post("http://localhost:8282/contacts",contact)
    .map(resp=>resp.json());
}
}
