import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesService } from '../../services/notes.service';

import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  item = {id:null, tittle: null, description: null};
  id = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public notesService: NotesService, public afDB: AngularFireDatabase) {
    this.id = navParams.get('id');
    if(this.id!=0){
     
    }
      
  }

  addNote(){
    this.item.id = Date.now();
    this.notesService.CreateNote(this.item);
    alert('item creado');
    this.navCtrl.pop();
  }
}