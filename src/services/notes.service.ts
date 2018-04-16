import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';




@Injectable()
export class NotesService{
 
    constructor(public afDB: AngularFireDatabase) {
         
      }  
    items = [];
      
    public getNote(id){
        //return this.items.filter(function(e, i){return e.id == id})[0] || {id:null, tittle: null, description: null};
        this.afDB.object('products/'+id);
    }
    public CreateNote(item){
        this.afDB.database.ref('products/'+item.id).set(item);
       //this.notes.push(note);
    }
}
