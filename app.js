function getComputerChoice(){
    let n = Math.floor(Math.random()*3)+1;
    // console.log(n)
    if(n==1){
        return 'rock'
    }
    else if(n==2){
        return 'paper'
    }
    else{
        return 'sciccors'
    }
}
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    // playerwins
    if(playerSelection==='rock' && computerSelection==='sciccors'
    || playerSelection==='sciccors' && computerSelection === 'paper' 
    || playerSelection === 'paper' && computerSelection === 'rock'){
        return 'user';
    }
    else if(playerSelection===computerSelection){
        return 'draw';
    }
    // computer wins
   else{
    return 'computer'
   }
}


// const playerSelection = "scIccors";
// console.log(computerSelection)
// const computerSelection = 'paper'
// console.log(playRound(playerSelection, computerSelection));


function game(){
    let playerScore = 0
    let compScore = 0
    for(let i = 0; i<5; i++){
        const computerSelection = getComputerChoice();
        let q = prompt('rock, paper or sciccor?')
        // while (!(q==='rock'||q==='scissor'||q==='paper')){
        //     prompt('enter again')
        // }
        if(playRound(q, computerSelection) === 'user') {
            playerScore += 1
            console.log(`you win round ${i+1}`)
        }
        else if(playRound(q,computerSelection)==='computer') {
            compScore += 1
            console.log(`you lose round ${i+1}`)
        }
        else{
            console.log(`round ${i+1} is drawed`)
        }
    }
    if(playerScore>compScore){
        console.log('You win the game')
    }
    else if(playerScore<compScore){
        console.log('you lose the game')
    }
    else{
        console.log('game draw')
    }
}
// game();
