declare var firebase;

export class tasksName{

    tasksNames = [{
        taskName:'',
    }]

    tasksInstruction= [{
        taskName:'',
    }]
    counting : number;

    constructor(){
        
        this.counting = 0;
        firebase.database().ref('/tasksInstruction/').on("value", (snapshot) =>{
            
            this.tasksInstruction  = []
                
            snapshot.forEach(e => {
                console.log(e.val().taskName)
                    this.tasksInstruction.push({taskName: e.val().taskName})
            });
          })



          firebase.database().ref('/tasks/').on("value", (snapshot) =>{
            
            this.tasksNames  = []
                console.log("Array not empty")
            snapshot.forEach(e => {
                    this.tasksNames.push({taskName: e.val().taskName})
            });
          })


    }

    returnTask(){
        if(this.tasksNames == [])
            console.log("Array empty..")
        else
            console.log("Its not empty")

        return this.tasksNames;
    }

    returnInstruction(){
        return this.tasksInstruction;
    }

}