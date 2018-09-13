import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { tasksName } from '../../retreiveTasks';

/**
 * Generated class for the LogInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;

@IonicPage()
@Component({
  selector: 'page-log-in',
  templateUrl: 'log-in.html',
})
export class LogInPage {

  person : FormGroup;
  object : tasksName;
  constructor(public navCtrl: NavController,fb : FormBuilder,
     public navParams: NavParams ,public toastCtrl: ToastController,) {
    this.object = new tasksName();
    this.person = fb.group({
      email : ['',Validators.compose([Validators.required ,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      password: ['',Validators.compose([Validators.required, Validators.minLength(6)])]

    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogInPage');
  }

  signIN(ob){
    firebase.auth().signInWithEmailAndPassword(ob.value.email,ob.value.password).then(User =>{
      this.navCtrl.push("TaskPage")
      console.log("You are in...")
 
     }).catch((error)=> {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
  
      const toast = this.toastCtrl.create({
        message: errorMessage,
        showCloseButton: true,
        closeButtonText: 'Ok',
        position: 'middle'
      });
      toast.onDidDismiss(this.dismissHandler);
      toast.present();  
    });
  }
  private dismissHandler() {
    console.info('Toast onDidDismiss()');
  }
   
  
  
}
