let userScore =0;
let compScore = 0;

const pictures = document.querySelectorAll(".picture");
const msg = document.querySelector("#click");

const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#comScore");
const drawGame=()=>
{
    console.log("draw hogya bhai!");
    msg.innerText ="draw , Play Again!";
    msg.style.backgroundColor="rgb(51, 11, 86)";
};

const showWinner =(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText =`You win, Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        
    }
        else{
            compScore++;
            compScorePara.innerText = compScore;
            console.log("you lose!");
            
            msg.innerText =`You lose , ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor="red";
        }
    
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor (Math.random()* 3) ;
    return options [randIdx];
};


const playGame =(userChoice) =>{
    console.log("user choice=",userChoice);
    const compChoice =genCompChoice();
    console.log("compChoice =",compChoice);
  

    if (userChoice ===compChoice){
        drawGame();
        } else{
            let userWin = true;
            if(userChoice === "rock"){
               userWin = compChoice ==="paper"?false :true;
            } else if( userChoice==="paper"){
                userWin = compChoice ==="scissors"?false:true;
            } else{
                userWin = compChoice ==="rock"?false:true;
            }
            showWinner(userWin,userChoice,compChoice);
        }

};






pictures.forEach((picture)=>{
   picture.addEventListener("click",()=>{
    const userChoice= picture.getAttribute("id");
    //  console. log ("choice was clicked", userChoice);
    //  genCompChoice();
     playGame(userChoice);
});
});