import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  person : FormGroup;
  constructor(public navCtrl: NavController, fb : FormBuilder, public navParams: NavParams) {
  
    this.person = fb.group({
      name: ['', Validators.compose([Validators.required ,Validators.pattern('[a-zA-Z ]*')])],
      surname: ['',Validators.compose([Validators.required ,Validators.pattern('[a-zA-Z ]*')])],
      email : ['',Validators.compose([Validators.required ,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      password: ['',Validators.compose([Validators.required ,Validators.pattern('[a-zA-Z ]*')])]

    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
