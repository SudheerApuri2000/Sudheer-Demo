let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");

const uScore = document.querySelector("#user");
const cScore = document.querySelector("#Computer");

const comChoice = () =>{
    const option = ["rock","paper","Scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw.play again";
    msg.style.backgroundColor = "#081b31";
    
};

const showWinner = (userWin,choiceId,comp) => {
    if(userWin)
    {
       userScore++;
       uScore.innerText=userScore
        
        msg.innerText = `You Won! ${choiceId} beats your ${comp}`;
        msg.style.backgroundColor = "green";
    }
    else{
       computerScore++;
       cScore.innerText = computerScore;
       
        msg.innerText = `computer Won! ${comp} beats your ${choiceId}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (choiceId) =>{
    
    const comp = comChoice();
   
    if(choiceId===comp){
        //draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(choiceId === "rock"){
           userWin = comp === "paper" ? false:true;
        }
        else if(choiceId==="paper"){
            userWin = comp === "scissor"?false:true;
        }
        else{
            userWin = comp === "rock"?false:true;
        }
        showWinner(userWin,choiceId,comp);
    }
};
choices.forEach((choice) =>{
    choice.addEventListener("click",() => {
        const choiceId = choice.getAttribute("id")
       // console.log("choice was clicked");
        playGame(choiceId)
    });

});