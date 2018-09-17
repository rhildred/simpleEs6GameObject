import readlineSync from 'readline-sync';

import OverUnder from "./OverUnder";

let sOutput = "";
let sInput = "";

let oGame = new OverUnder();
console.log(oGame.giveInstructions());


do{
    sInput = readlineSync.question(oGame.givePrompt());
    sOutput = oGame.takeTurn(sInput);
    console.log(sOutput);

}while(sOutput != "");

console.log(oGame.giveCongratulations());

