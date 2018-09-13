import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { network } from '../../network';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  @ViewChild(Slides) slides: Slides;

  checkNetwork : network;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      // this.checkNetwork = new network();
      // this.checkNetwork.networkMethod();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  goToSlide() {
    this.slides.slideTo(2, 500);
  }
  logIn(){
    this.navCtrl.push("LogInPage")
  }
  register(){
    this.navCtrl.push("RegisterPage");
  }

}
