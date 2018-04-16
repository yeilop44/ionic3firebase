import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { NotesService } from '../../services/notes.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { DetailPage } from '../detail/detail';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  items: Observable<any[]>;
 

  @ViewChild('myNav') nav: NavController;
  
  id = null;
  constructor(private afAuth:  AngularFireAuth, private toast: ToastController, public navCtrl: NavController, public navParams: NavParams, 
    public notesService: NotesService, public afDB: AngularFireDatabase) {
      this.items = afDB.list('products').valueChanges();
      //this.notes = notesService.getNotes();
    //notesService.getNotes().subscribe( notas => {this.notes = notas;});
  }
  
  public goToDetail(id){
    this.navCtrl.push(DetailPage,{id:id});
  }
  
  public CreateNote(){
     this.navCtrl.push(DetailPage, {id:0});
  }


  //bienvenida al home
  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if(data.email && data.uid){
        this.toast.create({
        message: `biendvenido to APP, ${data.email}`, duration: 5000
        }).present();
      }
      else{
        this.toast.create({
          message: ` No puede encontrar usuario`, duration: 5000
          }).present();
      }
    });
  }

 



}
