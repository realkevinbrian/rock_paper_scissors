
//init a funciton that randomly return either Rock paper or Scissor
function computerPlay(){

    //create a variable that holds the three possiblities
    let gameValues = ['rock', 'paper' , 'scissor'];

    //random a number in range of 0-2 because of the gameValues .
    let randGen = Math.floor(Math.random() * 3);

    //we return random gameValue using index
    return gameValues[randGen];

    
}

// console.log(computerPlay());


var userChoice = prompt("Please enter your Choice !");
//play a single round function

function singleround (userChoice, computerChoice){

    //here is where the game happens (action)

    //init 2 varibles which gonna hold the scores
    var userScore = 0, computerScore = 0;
    let userValue = userChoice.toLocaleLowerCase();

    let computerValue = computerChoice.toLocaleLowerCase();

    //check for cases
    if(userValue === "paper" && computerValue === "rock"){

        userScore++;
        console.log("You win Paper beats Rock");
    
    }else if(userValue === "rock" && computerValue === "paper"){

        computerScore++;
        console.log("You lose paper beats rock");

    }else if(userValue === "scissor" && computerValue === "paper"){

        userScore++;
        console.log("You win Scissor cuts Paper");

    }else if(userValue === "paper" && computerValue === "scissor"){

        computerScore++;
        console.log("You lose Scissor cuts paper");
    
    }else if(userValue === "rock" && computerValue === "scissor"){

        userScore++;
        console.log("You win rock beats scissor");
    
    }else if(userValue === computerValue){

        console.log("Impact");
    }else{
        return "Entered value not specified";
    }

    
    let score = {
        userScores : userScore,
        compScores : computerScore
    }


}


// singleround(userChoice, computerPlay());



//game function

function game(){

    var rounds = 0;

    while(rounds <= 5){
        singleround(userChoice, computerPlay());
        break;
        rounds++;

        
    }
}


game();