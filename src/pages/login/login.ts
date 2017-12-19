import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }

  openForgotpassword(){
    this.alert.create({
      title: 'Forgot Password',
      subTitle: 'Please provide the email that you use for register',
      inputs: [
        {
          name: 'email',
          placeholder: 'Enter Email'
        }],
      buttons: [{
        text: 'Send Email',
        handler: data =>{
          console.log(data);
        }
      }]
    }).present();
  }
  openHome(){
      this.navCtrl.setRoot(HomePage);
      }
}
