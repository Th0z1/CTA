import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/interval';


/**
 * Generated class for the QuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {

  timerVar;
  timerVar1;
  timerVar2;
  timerVal;
  timerS:number;
  timerM:number;
  timerH:number;

  

  public solution 	: FormGroup;
  taskName:''

  questions = [{
    question:'',
    questionType:''
  }]

  arrayAnswers = []
  score = 0;

  public anArray:any=[];

  countingQuestions = 0;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, private fb   : FormBuilder) {

    this.taskName = navParams.get("task")

    

    firebase.database().ref('/'+this.taskName+'/').on("value", (snapshot) =>{
            
      this.questions  = []
      this.countingQuestions = 0;
          console.log("Array not empty")
      snapshot.forEach(e => {
              this.countingQuestions += 1;
              this.questions.push({question: e.val().question , questionType:e.val().questionType })

              this.arrayAnswers.push(e.val().answer)
      });

    })


    this.timerS = 30;
    this.timerM = 0;
    this.timerH = 0;
    this.startTimer();

  }

  answers(oo){
    console.dir(oo)
    console.log("it will work..")
  }

  goTo(){
    console.log('this.anArray',this.anArray);

      var counter

      for(counter = 0; counter < this.anArray.length; counter++){

        if(this.anArray[counter] == this.arrayAnswers [counter])
            this.score +=1;

      }


    this.timerVar.unsubscribe()
    this.navCtrl.push("ScorePage",{score: this.score})
  }

  startTimer(){
  
  
    this.timerVar = Observable.interval(1000).subscribe(() =>{
      this.timerS--;
      if(this.timerS == 0){
        // this.timerS = 59;
        this.timerVar.unsubscribe()
        this.goTo();

      }
    })
  
    this.timerVar1 = Observable.interval(60000).subscribe(() =>{
      this.timerM--;
      if(this.timerM == 0){
        this.timerM = 59;
      }
    })
    this.timerVar2 = Observable.interval(3600000).subscribe(() =>{
      this.timerH--;
      if(this.timerH == 0){
        this.timerH--;
      }
    })
  
    
  }
}
