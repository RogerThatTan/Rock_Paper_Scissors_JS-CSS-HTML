let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScorePara = document.querySelector('#user-score');
const computerScorePara = document.querySelector('#comp-score');



const generateComputerChoice = () =>{   
    let options = ['rock','paper','scissors'];
    const randIdx =  Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () =>{
    msg.innerText = "Draw !! Play Again";
    msg.style.backgroundColor = "#EE7214";
};

const showWinner = (userWin,userChoice,computerChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "#527853";
    }
    else{
        computerScore++;
        computerScorePara.innerText = computerScore
        msg.innerText = `Computer Win! Computer ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "#B31312";
    }
};

const playGame =(userChoice) =>{
    const computerChoice = generateComputerChoice();
    console.log("Computer choice = ",computerChoice);

    if(userChoice === computerChoice){
        drawGame();
    }else{

        let userWin = true;
        if(userChoice === 'rock'){
            userWin = computerChoice === 'paper' ? false : true; 
            }
            else if(userChoice === 'paper'){
                userWin = computerChoice === 'scissor' ? false : true; 
            }
            else{
                userWin = computerChoice === 'rock' ? false : true; 
            }
            showWinner(userWin,userChoice,computerChoice);
        }
    };

choices.forEach((choice) => {
    choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });

});
