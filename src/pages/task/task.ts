import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { tasksName } from '../../retreiveTasks';

/**
 * Generated class for the TaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {
  task 
  instruction
  objectTask : tasksName;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.objectTask = new tasksName();
    
    this.task = this.objectTask.returnTask();
    this.instruction = this.objectTask.returnInstruction();
    console.log(this.task)

  }
  questionsPage(type){
    this.navCtrl.push("QuestionsPage",{task : type})
  }
}
