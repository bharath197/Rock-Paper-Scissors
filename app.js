function getComputerChoice() {
    let n = Math.floor(Math.random() * 3) + 1;
    // console.log(n)
    if (n == 1) {
        return 'rock'
    }
    else if (n == 2) {
        return 'paper'
    }
    else {
        return 'sciccors'
    }
}
function playRound(e) {

    let computerSelection = getComputerChoice();
    let playerSelection = this.value.toLowerCase();
    console.log(`computer choice is ${computerSelection}`)
    console.log(`player selection is ${playerSelection}`)
    
    if (playerSelection === 'rock' && computerSelection === 'sciccors'
        || playerSelection === 'sciccors' && computerSelection === 'paper'
        || playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('player wins')
        playerscore += 1
        player.textContent = player.textContent.slice(0,-1) + playerscore
    }
    else if (playerSelection === computerSelection) {
        console.log('draw')        
    }
    else {
        console.log('computer wins');
        computerscore += 1
        comp.textContent = comp.textContent.slice(0,-1) + computerscore
    }
}

let playerscore = 0
let computerscore = 0

const btns = document.querySelectorAll('button')
const body = document.querySelector('body');
const div = document.createElement('div')

const comp = document.createElement('p')
comp.setAttribute('id', 'computer-score')
comp.textContent = `computer score is 0`

const player = document.createElement('p')
player.setAttribute('id','player-score')
player.textContent = `player score is 0`

body.appendChild(div)
div.appendChild(comp)
div.appendChild(player)

btns.forEach((btn) => {
    btn.addEventListener('click', playRound)
})