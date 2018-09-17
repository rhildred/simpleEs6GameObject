export default class OverUnder{
    constructor(){
        this.nComputer = Math.ceil(Math.random() * 100);
    }
    giveInstructions(){
        return "This is a guessing game. I am thinking of a number between 1 and 100";
    }
    takeTurn(sInput){
        let sOutput = "";
        if(sInput > this.nComputer){
            sOutput = "Too high";
        }else if(sInput < this.nComputer){
            sOutput = "Too low";
        }else{
            sOutput = "";
        }
        return sOutput;
    }
    givePrompt(){
        return "Please guess ";
    }
    giveCongratulations(){
        return "You win ... the number was " + this.nComputer;
    }
}